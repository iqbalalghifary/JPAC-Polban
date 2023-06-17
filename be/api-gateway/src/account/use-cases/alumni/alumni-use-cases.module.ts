import { Module } from '@nestjs/common';
import { AlumniUseCases } from './alumni.use-case';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_ACCOUNT',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 3001,
        },
      },
    ]),
  ],
  providers: [AlumniUseCases],
  exports: [AlumniUseCases],
})
export class AlumniUseCasesModule {}
