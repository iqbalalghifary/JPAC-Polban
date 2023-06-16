import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class VacancyUseCases {
  constructor(
    @Inject('SERVICE_VACANCY') private readonly clientVacancy: ClientProxy,
  ) {}

  getAllVacancies(payload?: any) {
    const pattern = { cmd: 'get_all_vacancy' };
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getVacanciesWithPartner(payload: any) {
    const pattern = { cmd: 'get_vacancy_with_partner' };
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  getVacancyById(payload: any) {
    const pattern = { cmd: 'get_by_id_vacancy' };
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createVacancy(payload: any) {
    const pattern = { cmd: 'create_vacancy' };
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  activateVacancy(payload: any) {
    const pattern = { cmd: 'activate_vacancy' };
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

  deleteAllVacancy() {
    const pattern = { cmd: 'delete_all_vacancy' };
    const payload = {};
    return this.clientVacancy
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
