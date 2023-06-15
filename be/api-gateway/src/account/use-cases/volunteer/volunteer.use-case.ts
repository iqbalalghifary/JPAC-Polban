import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class VolunteerUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientVolunteer: ClientProxy,
  ) {}

  getAllVolunteers() {
    const pattern = { cmd: 'get_all_volunteer' };
    const payload = {};
    return this.clientVolunteer
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getVolunteerById(id: any) {
    const pattern = { cmd: 'get_by_id_volunteer' };
    const payload = id;
    return this.clientVolunteer
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createVolunteer(payload: any) {
    const pattern = { cmd: 'register_volunteer' };
    return this.clientVolunteer
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateVolunteer(payload: any) {
    const pattern = { cmd: 'update_one_volunteer' };
    return this.clientVolunteer
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteVolunteer(id: string) {
    const pattern = { cmd: 'delete_volunteer' };
    const payload = id;
    return this.clientVolunteer
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }
}
