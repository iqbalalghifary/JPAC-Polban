import { Injectable } from '@nestjs/common';
import { Vacancy } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class VacancyUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getVacancy(item?: any) {
    return this.dataServices.vacancies.get(item);
  }

  createVacancy(Vacancy: Vacancy) {
    return this.dataServices.vacancies.create(Vacancy);
  }

  updateVacancy(data: any) {
    return this.dataServices.vacancies.updateOne(data.filters, data.payload);
  }

  deleteVacancy(id: any) {
    return this.dataServices.vacancies.delete(id);
  }

  deleteAllVacancy() {
    return this.dataServices.vacancies.deleteAll();
  }

}
