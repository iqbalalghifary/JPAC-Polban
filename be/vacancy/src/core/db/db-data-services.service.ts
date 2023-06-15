import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices, IGenericRepository } from '../../core';
import { MongoGenericRepository } from './db-generic-repository';
import {
  JobApplication,
  JobApplicationDocument,
  Vacancy,
  VacancyDocument,
  InternshipSchedule,
  InternshipScheduleDocument
} from './schema';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  vacancies: MongoGenericRepository<Vacancy>;
  jobApplications: IGenericRepository<JobApplication>;
  internshipSchedules: IGenericRepository<InternshipSchedule>;

  constructor(
    @InjectModel(Vacancy.name)
    private vacancyRepository: Model<VacancyDocument>,
    @InjectModel(JobApplication.name)
    private jobApplicationRepository: Model<JobApplicationDocument>,
    @InjectModel(InternshipSchedule.name)
    private internshipScheduleRepository: Model<InternshipScheduleDocument>,
  ) {}

  onApplicationBootstrap() {
    this.vacancies = new MongoGenericRepository<Vacancy>(this.vacancyRepository);
    this.internshipSchedules = new MongoGenericRepository<InternshipSchedule>(this.internshipScheduleRepository);
    this.jobApplications = new MongoGenericRepository<JobApplication>(this.jobApplicationRepository);
  }
}
