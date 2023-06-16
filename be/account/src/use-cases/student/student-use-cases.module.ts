import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { StudentUseCases } from './student.use-case';
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
  providers: [StudentUseCases],
  exports: [StudentUseCases],
})
export class StudentUseCasesModule {}
