import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { GalleryFactoryService } from './gallery-factory.service';
import { GalleryUseCases } from './gallery.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [GalleryFactoryService, GalleryUseCases],
  exports: [GalleryFactoryService, GalleryUseCases],
})
export class GalleryUseCasesModule {}
