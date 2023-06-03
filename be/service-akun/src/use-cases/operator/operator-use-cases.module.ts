import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { OperatorUseCases } from './operator.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [OperatorUseCases],
  exports: [OperatorUseCases],
})
export class OperatorUseCasesModule {}
