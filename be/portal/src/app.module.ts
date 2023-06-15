import { Module } from '@nestjs/common';
import {
  AgendaController,
  AnnouncementController,
  GalleryController,
} from './controllers';
import { MongoDataServicesModule } from './core/db/db-data-services.module';
import { AgendaUseCasesModule } from './use-cases/agenda/agenda-use-cases.module';
import { AnnouncementUseCasesModule } from './use-cases/announcement/announcement-use-cases.module';
import { GalleryUseCasesModule } from './use-cases/gallery/gallery-use-cases.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    MongoDataServicesModule,
    AgendaUseCasesModule,
    AnnouncementUseCasesModule,
    GalleryUseCasesModule
  ],
  controllers: [
    AgendaController,
    AnnouncementController,
    GalleryController,
  ],
  providers: [],
})
export class AppModule {}
