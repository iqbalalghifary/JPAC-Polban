import { Module } from '@nestjs/common';
import {
  AgendaController,
  AnnouncementController,
  CarouselController,
  GalleryController,
} from './controllers';
import { MongoDataServicesModule } from './core/db/db-data-services.module';
import { AgendaUseCasesModule } from './use-cases/auth/auth-use-cases.module';
import { AnnouncementUseCasesModule } from './use-cases/alumni/alumni-use-cases.module';
import { GalleryUseCasesModule } from './use-cases/gallery/gallery-use-cases.module';
import { CarouselUseCasesModule } from './use-cases/partner/partner-use-cases.module';
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
