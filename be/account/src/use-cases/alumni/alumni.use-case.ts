import { Inject, Injectable } from '@nestjs/common';
import { Alumni, Token } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { nanoid } from 'nanoid'
import { extname } from 'path';
const fs = require('fs')

@Injectable()
export class AlumniUseCases {
  constructor(
    private dataServices: IDataServices,
    @Inject('SERVICE_EMAIL') private readonly clientEmail: ClientProxy,
  ) {}

  getAllAlumnis() {
    return this.dataServices.alumnis.getAll();
  }

  uploadReceipt(data: any){
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(data.payload.originalname);
    const filename = `uploads/receipt/${uniqueSuffix}${ext}`;

    const alumni = new Alumni();
    alumni.receipt = filename;
    const updateAlumni = this.dataServices.alumnis.updateOne(data.id, alumni);

    if(updateAlumni.message != null){
      const arrBuffer = data.payload.buffer.data
      fs.appendFileSync(filename, Buffer.from(arrBuffer));
    }
    return updateAlumni;
  }

  updateAlumniOne(data: any) {
    return this.dataServices.alumnis.updateOne(data.id, data.payload);
  }

  updateAlumniMultiple(data: any) {
    return this.dataServices.alumnis.updateMultiple(data.id, data.payload);
  }

  async verifyAlumni(data: any) {
    this.dataServices.alumnis.updateOne(data.id, data.payload);
    const alumni_profile = await this.dataServices.alumnis.get(data.id);

    const newToken = new Token();
    newToken.token = nanoid(50);
    newToken.isActive = true;
    newToken.expiredAt =  new Date().setHours(new Date().getHours() + 1);

    this.dataServices.tokens.create(newToken);

    const pattern = { cmd: 'email_request' };
    const payload = { 
      to : alumni_profile.email,
      subject: `${alumni_profile.name}, Usulan Registrasi Akun Anda Telah Diverifikasi`,
      type: "aktivasi-akun-mitra",
      params: {
        "name": alumni_profile.name,
        "link": `http://pusat-karir.polban.ac.id/${newToken.token}`
      }
    };
    return this.clientEmail
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getAlumniById(id: any) {
    return this.dataServices.alumnis.get(id);
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
