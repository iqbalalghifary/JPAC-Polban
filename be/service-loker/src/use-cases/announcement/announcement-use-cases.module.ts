import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { AnnouncementFactoryService } from './announcement-factory.service';
import { AnnouncementUseCases } from './announcement.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AnnouncementFactoryService, AnnouncementUseCases],
  exports: [AnnouncementFactoryService, AnnouncementUseCases],
})
export class AnnouncementUseCasesModule {}
