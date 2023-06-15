import { Inject, Injectable } from '@nestjs/common';
import { Alumni, Token } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { nanoid } from 'nanoid'

@Injectable()
export class AlumniUseCases {
  constructor(
    private dataServices: IDataServices,
    @Inject('SERVICE_EMAIL') private readonly clientEmail: ClientProxy,
  ) {}

  getAllAlumnis(): Promise<Alumni[]> {
    return this.dataServices.alumnis.getAll();
  }

  updateAlumniOne(data: any): Promise<Alumni> {
    return this.dataServices.alumnis.updateOne(data.id, data.payload);
  }

  updateAlumniMultiple(data: any): Promise<Alumni> {
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

  getAlumniById(id: any): Promise<Alumni> {
    return this.dataServices.alumnis.get(id);
  }

  registerAlumni(alumni: Alumni): Promise<Alumni> {
    return this.dataServices.alumnis.create(alumni);
  }

  deleteAlumni(id: string): Promise<Alumni> {
    return this.dataServices.alumnis.delete(id);
  }
}
