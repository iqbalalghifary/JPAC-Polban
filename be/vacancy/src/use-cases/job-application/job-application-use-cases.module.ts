import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { JobApplicationUseCases } from './job-application.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [JobApplicationUseCases],
  exports: [JobApplicationUseCases],
})
export class JobApplicationUseCasesModule {}
