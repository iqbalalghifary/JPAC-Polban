import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { AgendaFactoryService } from './internship-shedule-factory.service';
import { AgendaUseCases } from './internship-schedule.use-case.ts.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AgendaFactoryService, AgendaUseCases],
  exports: [AgendaFactoryService, AgendaUseCases],
})
export class AgendaUseCasesModule {}
