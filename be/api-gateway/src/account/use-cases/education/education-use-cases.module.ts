import { Module } from '@nestjs/common';
import { EducationUseCases } from './education.use-case';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_ACCOUNT',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      },
    ]),
  ],
  providers: [EducationUseCases],
  exports: [EducationUseCases],
})
export class EducationUseCasesModule {}
