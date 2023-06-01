import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { AgendaFactoryService } from './vacancy-factory.service';
import { AgendaUseCases } from './vacancy.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AgendaFactoryService, AgendaUseCases],
  exports: [AgendaFactoryService, AgendaUseCases],
})
export class AgendaUseCasesModule {}
