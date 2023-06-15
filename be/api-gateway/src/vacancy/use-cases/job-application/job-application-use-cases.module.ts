import { Module } from '@nestjs/common';
import { JobApplicationUseCases } from './job-application.use-case';
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
  providers: [JobApplicationUseCases],
  exports: [JobApplicationUseCases],
})
export class JobApplicationUseCasesModule {}
