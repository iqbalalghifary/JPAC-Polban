import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { AgendaFactoryService } from './auth-factory.service';
import { AgendaUseCases } from './auth.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AgendaFactoryService, AgendaUseCases],
  exports: [AgendaFactoryService, AgendaUseCases],
})
export class AgendaUseCasesModule {}
