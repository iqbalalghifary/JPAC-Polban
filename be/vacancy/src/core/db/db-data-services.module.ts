import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../core';
import { config } from '../../config';
import {
  InternshipSchedule,
  InternshipScheduleSchema,
  JobApplication,
  JobApplicationSchema,
  Vacancy,
  VacancySchema
} from './schema';
import { MongoDataServices } from './db-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobApplication.name, schema: JobApplicationSchema },
      { name: InternshipSchedule.name, schema: InternshipScheduleSchema },
      { name: Vacancy.name, schema: VacancySchema },
    ]),
    MongooseModule.forRoot(config.MONGO_URI),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
