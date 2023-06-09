import { Vacancy, InternshipSchedule, JobApplication } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract internshipSchedules: IGenericRepository<InternshipSchedule>;
  abstract vacancies: IGenericRepository<Vacancy>;
  abstract jobApplications: IGenericRepository<JobApplication>;
}
