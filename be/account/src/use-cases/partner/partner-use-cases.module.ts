import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { PartnerUseCases } from './partner.use-case';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongoDataServicesModule,
    ClientsModule.register([
      {
        name: 'SERVICE_EMAIL',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002,
        },
      },
    ]),    
  ],
  providers: [PartnerUseCases],
  exports: [PartnerUseCases],
})
export class PartnerUseCasesModule {}
