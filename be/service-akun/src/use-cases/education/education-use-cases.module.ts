import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { EducationUseCases } from './education.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [EducationUseCases],
  exports: [EducationUseCases],
})
export class EducationUseCasesModule {}
