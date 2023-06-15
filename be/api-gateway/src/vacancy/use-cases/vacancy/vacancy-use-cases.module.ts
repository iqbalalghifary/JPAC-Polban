import { Module } from '@nestjs/common';
import { VacancyUseCases } from './vacancy.use-case';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_VACANCY',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3004,
        },
      },
    ]),
  ],
  providers: [VacancyUseCases],
  exports: [VacancyUseCases],
})
export class VacancyUseCasesModule {}
