import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AlumniUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientAlumni: ClientProxy,
  ) {}

  getAllAlumnis() {
    const pattern = { cmd: 'get_all_alumni' };
    const payload = {};
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message })),
      );
  }

  verifyAlumni(payload: any) {
    const pattern = { cmd: 'verify_alumni' };
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message })),
      );
  }

  activateAlumni(payload: any) {
    const pattern = { cmd: 'activate_alumni' };
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  uploadReceipt(payload: any) {
    console.log(payload)
    const pattern = { cmd: 'receipt_alumni' };
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateAlumni(payload: any) {
    const pattern = { cmd: 'update_alumni' };
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getAlumniById(id: any) {
    const pattern = { cmd: 'get_by_id_alumni' };
    const payload = id;
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  registerAlumni(data: any) {
    const pattern = { cmd: 'register_alumni' };
    const payload = data;
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteAlumni(id: string) {
    const pattern = { cmd: 'delete_alumni' };
    const payload = id;
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllAlumni() {
    const pattern = { cmd: 'delete_all_alumni' };
    const payload = {};
    return this.clientAlumni
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
