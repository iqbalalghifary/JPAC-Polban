import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class JobApplicationUseCases {
  constructor(
    @Inject('SERVICE_VACANCY') private readonly clientJobApplication: ClientProxy,
  ) {}

  getAllJobApplications() {
    const pattern = { cmd: 'get_all_job_application' };
    const payload = {};
    return this.clientJobApplication
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getJobApplicationById(id: any) {
    const pattern = { cmd: 'get_by_id_job_application' };
    const payload = id;
    return this.clientJobApplication
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createJobApplication(payload: any) {
    const pattern = { cmd: 'register_job_application' };
    return this.clientJobApplication
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateJobApplication(payload: any) {
    const pattern = { cmd: 'update_one_job_application' };
    return this.clientJobApplication
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteJobApplication(id: string) {
    const pattern = { cmd: 'delete_job_application' };
    const payload = id;
    return this.clientJobApplication
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllJobApplication() {
    const pattern = { cmd: 'delete_all_job_application' };
    const payload = {};
    return this.clientJobApplication
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
