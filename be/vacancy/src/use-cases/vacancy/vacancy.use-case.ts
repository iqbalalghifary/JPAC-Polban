import { Injectable } from '@nestjs/common';
import { Vacancy } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class VacancyUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllVacancies() {
    return this.dataServices.vacancies.getAll();
  }

  getVacancyById(id: any) {
    return this.dataServices.vacancies.get(id);
  }

  createVacancy(Vacancy: Vacancy) {
    return this.dataServices.vacancies.create(Vacancy);
  }

  updateVacancy(data: any) {
    return this.dataServices.vacancies.update(data.id, data.payload);
  }

  deleteVacancy(id: any) {
    return this.dataServices.vacancies.delete(id);
  }

  deleteAllVacancy() {
    return this.dataServices.vacancies.deleteAll();
  }

}
