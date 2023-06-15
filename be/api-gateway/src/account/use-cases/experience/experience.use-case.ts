import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class ExperienceUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientExperience: ClientProxy,
  ) {}

  getAllExperiences() {
    const pattern = { cmd: 'get_all_experience' };
    const payload = {};
    return this.clientExperience
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getExperienceById(id: any) {
    const pattern = { cmd: 'get_by_id_experience' };
    const payload = id;
    return this.clientExperience
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createExperience(payload: any) {
    const pattern = { cmd: 'register_experience' };
    return this.clientExperience
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateExperience(payload: any) {
    const pattern = { cmd: 'update_one_experience' };
    return this.clientExperience
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteExperience(id: string) {
    const pattern = { cmd: 'delete_experience' };
    const payload = id;
    return this.clientExperience
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllExperience() {
    const pattern = { cmd: 'delete_all_experience' };
    const payload = {};
    return this.clientExperience
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
