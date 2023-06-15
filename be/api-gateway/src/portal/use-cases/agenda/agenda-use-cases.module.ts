import { Module } from '@nestjs/common';
import { AgendaUseCases } from './agenda.use-case';
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
  providers: [AgendaUseCases],
  exports: [AgendaUseCases],
})
export class AgendaUseCasesModule {}
