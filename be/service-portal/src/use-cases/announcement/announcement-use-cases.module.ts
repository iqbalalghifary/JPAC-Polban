import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { AnnouncementFactoryService } from './announcement-factory.service';
import { AnnouncementUseCases } from './announcement.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [AnnouncementFactoryService, AnnouncementUseCases],
  exports: [AnnouncementFactoryService, AnnouncementUseCases],
})
export class AnnouncementUseCasesModule {}
