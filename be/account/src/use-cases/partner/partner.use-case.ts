import { Inject, Injectable } from '@nestjs/common';
import { Partner, Token, User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { extname } from 'path';
import { nanoid } from 'nanoid'
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import * as bcrypt from 'bcrypt';
const fs = require('fs')

@Injectable()
export class PartnerUseCases {
  constructor(
    private dataServices: IDataServices,
    @Inject('SERVICE_EMAIL') private readonly clientEmail: ClientProxy,    
  ) {}

  getPartner(item?: any) {
    return this.dataServices.partners.get(item);
  }

  async uploadMoU(data: any){
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(data.payload.originalname);
    const filename = `uploads/mou/${uniqueSuffix}${ext}`;

    const partner = new Partner();
    partner.mou = filename;
    const updatePartner = await this.dataServices.partners.updateOne(data.filter_partner, partner);

    const arrBuffer = data.payload.buffer.data
    await fs.appendFileSync(filename, Buffer.from(arrBuffer));

    const token = new Token();
    token.isActive = false;

    await this.dataServices.tokens.updateOne(data.filter_token, token);

    return updatePartner;
  }

  async activatePartner(data: any) {
    await this.dataServices.partners.updateOne(data.filters, data.payload);

    const generatedPassword = Math.random().toString(36).slice(-8);

    const partnerProfile = await this.dataServices.partners.get(data.filters);

    console.log(partnerProfile);

    const newUser = new User();
    newUser.username = partnerProfile[0].email;
    newUser.password = await bcrypt.hash(generatedPassword, 10)
    newUser.userRole = 'Partner';
    newUser.referenceAttributeId = data.filters;

    await this.dataServices.users.create(newUser);

    const pattern = { cmd: 'email_aktivasi_mitra' };
    const payload = { 
      to : partnerProfile[0].email,
      subject: `${partnerProfile[0].name}, your account has been activated`,
      params: {
        "name": partnerProfile[0].name,
        "email": partnerProfile[0].email,
        "password": generatedPassword
      }
    };
    return this.clientEmail
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  async verifyPartner(data: any) {

    await this.dataServices.partners.updateOne(data.filters, data.payload);
  
    const newToken = new Token();
    newToken.token = nanoid(50);
    newToken.isActive = true;
    newToken.referenceAttributeId = data.filters;
    newToken.userRole = "Partner"
    newToken.expiredAt =  new Date().setHours(new Date().getHours() + 1);

    await this.dataServices.tokens.create(newToken);

    const partnerProfile = await this.dataServices.partners.get({ _id: data.filters });

    const pattern = { cmd: 'email_verifikasi_mitra' };
    const payload = { 
      to : partnerProfile[0].email,
      subject: `${partnerProfile[0].name}, your partnership submission has been verified`,
      params: {
        "name": partnerProfile[0].name,
        "link": `http://pusat-karir.polban.ac.id/${newToken.token}`
      }
    };
    return this.clientEmail
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updatePartner(data: any) {
    return this.dataServices.partners.updateOne(data.filters, data.payload);
  }

  createPartner(Partner: Partner) {
    return this.dataServices.partners.create(Partner);
  }

  deletePartner(id: any) {
    return this.dataServices.partners.delete(id);
  }

  deleteAllPartner() {
    return this.dataServices.partners.deleteAll();
  }

}
