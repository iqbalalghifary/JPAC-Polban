import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class CertificationUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientCertification: ClientProxy,
  ) {}

  getAllCertifications() {
    const pattern = { cmd: 'get_all_certification' };
    const payload = {};
    return this.clientCertification
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getCertificationById(id: any) {
    const pattern = { cmd: 'get_by_id_certification' };
    const payload = id;
    return this.clientCertification
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createCertification(payload: any) {
    const pattern = { cmd: 'register_certification' };
    return this.clientCertification
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateCertification(payload: any) {
    const pattern = { cmd: 'update_one_certification' };
    return this.clientCertification
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteCertification(id: string) {
    const pattern = { cmd: 'delete_certification' };
    const payload = id;
    return this.clientCertification
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllCertification() {
    const pattern = { cmd: 'delete_all_certification' };
    const payload = {};
    return this.clientCertification
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
