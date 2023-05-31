import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { GalleryFactoryService } from './gallery-factory.service';
import { GalleryUseCases } from './gallery.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [GalleryFactoryService, GalleryUseCases],
  exports: [GalleryFactoryService, GalleryUseCases],
})
export class GalleryUseCasesModule {}
