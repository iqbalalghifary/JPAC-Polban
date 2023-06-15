import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class InternshipScheduleUseCases {
  constructor(
    @Inject('SERVICE_VACANCY') private readonly clientInternshipSchedule: ClientProxy,
  ) {}

  getAllInternshipSchedules() {
    const pattern = { cmd: 'get_all_internship_schedule' };
    const payload = {};
    return this.clientInternshipSchedule
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getInternshipScheduleById(id: any) {
    const pattern = { cmd: 'get_by_id_internship_schedule' };
    const payload = id;
    return this.clientInternshipSchedule
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createInternshipSchedule(payload: any) {
    const pattern = { cmd: 'register_internship_schedule' };
    return this.clientInternshipSchedule
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateInternshipSchedule(payload: any) {
    const pattern = { cmd: 'update_one_internship_schedule' };
    return this.clientInternshipSchedule
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteInternshipSchedule(id: string) {
    const pattern = { cmd: 'delete_internship_schedule' };
    const payload = id;
    return this.clientInternshipSchedule
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
