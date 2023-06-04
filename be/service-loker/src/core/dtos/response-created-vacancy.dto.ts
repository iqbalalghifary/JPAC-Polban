import { Vacancy } from '../entities';

export class VacancyResponseDto {
  success: boolean;
  createdVacancy: Vacancy;
}
