import { Module } from '@nestjs/common';
import { AnnouncementFactoryService } from './announcement-factory.service';
import { AnnouncementUseCases } from './announcement.use-case';
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
  providers: [AnnouncementFactoryService, AnnouncementUseCases],
  exports: [AnnouncementFactoryService, AnnouncementUseCases],
})
export class AnnouncementUseCasesModule {}
