import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class EducationUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientEducation: ClientProxy,
  ) {}

  getAllEducations() {
    const pattern = { cmd: 'get_all_education' };
    const payload = {};
    return this.clientEducation
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getEducationById(id: any) {
    const pattern = { cmd: 'get_by_id_education' };
    const payload = id;
    return this.clientEducation
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createEducation(payload: any) {
    const pattern = { cmd: 'register_education' };
    return this.clientEducation
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateEducation(payload: any) {
    const pattern = { cmd: 'update_one_education' };
    return this.clientEducation
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteEducation(id: string) {
    const pattern = { cmd: 'delete_education' };
    const payload = id;
    return this.clientEducation
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }
}
