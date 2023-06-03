import { Injectable } from '@nestjs/common';
import { Vacancy } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class VacancyUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllVacancies(): Promise<Vacancy[]> {
    return this.dataServices.vacancies.getAll();
  }

  getVacancyById(id: any): Promise<Vacancy> {
    return this.dataServices.vacancies.get(id);
  }

  createVacancy(Vacancy: Vacancy): Promise<Vacancy> {
    return this.dataServices.vacancies.create(Vacancy);
  }

  updateVacancy(VacancyId: string, Vacancy: Vacancy): Promise<Vacancy> {
    return this.dataServices.vacancies.update(VacancyId, Vacancy);
  }

  deleteVacancy(id: any): Promise<Vacancy> {
    return this.dataServices.vacancies.delete(id);
  }

}
