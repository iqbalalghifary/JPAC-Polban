import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { StudentUseCases } from './student.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [StudentUseCases],
  exports: [StudentUseCases],
})
export class StudentUseCasesModule {}
