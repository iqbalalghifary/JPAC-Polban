import { Module } from '@nestjs/common';
import {
  InternshipScheduleController,
  JobApplicationController,
  VacancyController
} from './controllers';
import { MongoDataServicesModule } from './core/db/db-data-services.module';
import { InternshipScheduleUseCasesModule } from './use-cases/internship-shedule/internship-shedule-use-cases.module';
import { JobApplicationUseCasesModule } from './use-cases/job-application/job-application-use-cases.module';
import { VacancyUseCasesModule } from './use-cases/vacancy/vacancy-use-cases.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    MongoDataServicesModule,
    InternshipScheduleUseCasesModule,
    JobApplicationUseCasesModule,
    VacancyUseCasesModule
  ],
  controllers: [
    VacancyController,
    JobApplicationController,
    InternshipScheduleController
  ],
  providers: [],
})
export class AppModule {}
