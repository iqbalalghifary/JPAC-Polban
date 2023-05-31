import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { AgendaFactoryService } from './agenda-factory.service';
import { AgendaUseCases } from './agenda.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [AgendaFactoryService, AgendaUseCases],
  exports: [AgendaFactoryService, AgendaUseCases],
})
export class AgendaUseCasesModule {}
