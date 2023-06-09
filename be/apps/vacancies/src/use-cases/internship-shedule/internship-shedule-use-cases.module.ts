import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { InternshipScheduleUseCases } from './internship-schedule.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [InternshipScheduleUseCases],
  exports: [InternshipScheduleUseCases],
})
export class InternshipScheduleUseCasesModule {}
