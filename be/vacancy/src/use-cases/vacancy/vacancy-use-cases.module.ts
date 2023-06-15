import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { VacancyUseCases } from './vacancy.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [VacancyUseCases],
  exports: [VacancyUseCases],
})
export class VacancyUseCasesModule {}
