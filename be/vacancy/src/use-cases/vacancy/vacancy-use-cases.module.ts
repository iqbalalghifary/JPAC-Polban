import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { VacancyUseCases } from './vacancy.use-case';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongoDataServicesModule,
    ClientsModule.register([
      {
        name: 'SERVICE_ACCOUNT',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      },
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
  providers: [VacancyUseCases],
  exports: [VacancyUseCases],
})
export class VacancyUseCasesModule {}
