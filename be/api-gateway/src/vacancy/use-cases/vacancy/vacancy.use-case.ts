import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class VacancyUseCases {
  constructor(
    @Inject('SERVICE_VACANCY') private readonly clientVacancy: ClientProxy,
  ) {}

  getAllVacancies() {
    const pattern = { cmd: 'get_all_vacancy' };
    const payload = {};
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getVacancyById(id: any) {
    const pattern = { cmd: 'get_by_id_vacancy' };
    const payload = id;
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createVacancy(payload: any) {
    const pattern = { cmd: 'register_vacancy' };
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateVacancy(payload: any) {
    const pattern = { cmd: 'update_one_vacancy' };
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteVacancy(id: string) {
    const pattern = { cmd: 'delete_vacancy' };
    const payload = id;
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
