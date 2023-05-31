import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { CarouselUseCases } from './carousel.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [CarouselUseCases],
  exports: [CarouselUseCases],
})
export class CarouselUseCasesModule {}
