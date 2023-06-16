import { Inject, Injectable } from '@nestjs/common';
import { Alumni, Token, User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { nanoid } from 'nanoid'
import { extname } from 'path';
import * as bcrypt from 'bcrypt';
const fs = require('fs')

@Injectable()
export class AlumniUseCases {
  constructor(
    private dataServices: IDataServices,
    @Inject('SERVICE_EMAIL') private readonly clientEmail: ClientProxy,
  ) {}

  getAlumni(item?: any) {
    return this.dataServices.alumnis.get(item);
  }

  async uploadReceipt(data: any){
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(data.payload.originalname);
    const filename = `uploads/receipt/${uniqueSuffix}${ext}`;

    const alumni = new Alumni();
    alumni.receipt = filename;
    const updateAlumni = await this.dataServices.alumnis.updateOne(data.filter_alumni, alumni);

    const arrBuffer = data.payload.buffer.data
    await fs.appendFileSync(filename, Buffer.from(arrBuffer));

    const token = new Token();
    token.isActive = false;

    await this.dataServices.tokens.updateOne(data.filter_token, token);

    return updateAlumni;
  }

  updateAlumniOne(data: any) {
    return this.dataServices.alumnis.updateOne(data.filters, data.payload);
  }

  updateAlumniMultiple(data: any) {
    return this.dataServices.alumnis.updateMultiple(data.filters, data.payload);
  }

  async verifyAlumni(data: any) {
    const alumni = new Alumni();
    alumni.status = data.status;

    await this.dataServices.alumnis.updateOne(data.filters, data.payload);

    const newToken = new Token();
    newToken.token = nanoid(50);
    newToken.isActive = true;
    newToken.referenceAttributeId = data.filters;
    newToken.userRole = "Alumni"
    newToken.expiredAt =  new Date().setHours(new Date().getHours() + 1);

    await this.dataServices.tokens.create(newToken);

    const alumniProfile = await this.dataServices.alumnis.get(data.filters);

    const pattern = { cmd: 'email_verifikasi_pelamar' };
    const payload = { 
      to : alumniProfile[0].email,
      subject: `${alumniProfile[0].name}, your registration has been verified`,
      params: {
        "name": alumniProfile[0].name,
        "link": `http://pusat-karir.polban.ac.id/${newToken.token}`
      }
    };
    return this.clientEmail
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  async activateAlumni(data: any) {
    await this.dataServices.alumnis.updateOne(data.filters, data.payload);

    const generatedPassword = Math.random().toString(36).slice(-8);

    const alumniProfile = await this.dataServices.alumnis.get(data.filters);

    const newUser = new User();
    newUser.username = alumniProfile[0].email;
    newUser.password = await bcrypt.hash(generatedPassword, 10)
    newUser.userRole = 'Alumni';
    newUser.referenceAttributeId = data.filters;

    await this.dataServices.users.create(newUser);

    const pattern = { cmd: 'email_aktivasi_pelamar' };
    const payload = { 
      to : alumniProfile[0].email,
      subject: `${alumniProfile[0].name}, your account has been activated`,
      params: {
        "name": alumniProfile[0].name,
        "email": alumniProfile[0].email,
        "password": generatedPassword
      }
    };
    return this.clientEmail
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  registerAlumni(alumni: Alumni, bufferData: any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(bufferData.originalname);
    const filename = `uploads/certificate/${uniqueSuffix}${ext}`;
    alumni.graduationLetter = filename;
    const arrBuffer = bufferData.buffer.data
    fs.appendFileSync(filename, Buffer.from(arrBuffer));
    return this.dataServices.alumnis.create(alumni);
  }

  deleteAlumni(id: string) {
    return this.dataServices.alumnis.delete(id);
  }

  deleteAllAlumni() {
    return this.dataServices.alumnis.deleteAll();
  }

}
