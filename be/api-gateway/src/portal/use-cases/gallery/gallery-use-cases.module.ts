import { Module } from '@nestjs/common';
import { GalleryFactoryService } from './gallery-factory.service';
import { GalleryUseCases } from './gallery.use-case';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_PORTAL',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3003,
        },
      },
    ]),
  ],
  providers: [GalleryFactoryService, GalleryUseCases],
  exports: [GalleryFactoryService, GalleryUseCases],
})
export class GalleryUseCasesModule {}
