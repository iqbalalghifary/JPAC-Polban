import { Module } from '@nestjs/common';
import {
  AgendaController,
  AnnouncementController,
  CarouselController,
  GalleryController,
} from './controllers';
import { DataServicesModule } from './services/data-services.module';
import { AgendaUseCasesModule } from './use-cases/agenda/agenda-use-cases.module';
import { AnnouncementUseCasesModule } from './use-cases/announcement/announcement-use-cases.module';
import { GalleryUseCasesModule } from './use-cases/gallery/gallery-use-cases.module';
import { CarouselUseCasesModule } from './use-cases/carousel/carousel-use-cases.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    DataServicesModule,
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
