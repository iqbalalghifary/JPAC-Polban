import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { AnnouncementFactoryService } from './student-factory.service';
import { AnnouncementUseCases } from './student.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AnnouncementFactoryService, AnnouncementUseCases],
  exports: [AnnouncementFactoryService, AnnouncementUseCases],
})
export class AnnouncementUseCasesModule {}
