import { Module } from '@nestjs/common';
import {
  InternshipScheduleController,
  JobApplicationController,
  VacancyController
} from './controllers';
import { MongoDataServicesModule } from './core/db/db-data-services.module';
import { AgendaUseCasesModule } from './use-cases/internship-shedule/internship-shedule-use-cases.module';
import { AnnouncementUseCasesModule } from './use-cases/announcement/announcement-use-cases.module';
import { GalleryUseCasesModule } from './use-cases/gallery/gallery-use-cases.module';
import { CarouselUseCasesModule } from './use-cases/carousel/carousel-use-cases.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    MongoDataServicesModule,
    AgendaUseCasesModule,
    AnnouncementUseCasesModule,
    GalleryUseCasesModule,
    CarouselUseCasesModule
  ],
  controllers: [
    AgendaController,
    AnnouncementController,
    CarouselController,
    GalleryController,
  ],
  providers: [],
})
export class AppModule {}
