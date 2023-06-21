import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { OperatorUseCases } from './operator.use-case';
import { CommandModule } from 'nestjs-command';
import { OperatorSeed } from './operator.seed';
import { UserUseCases } from '../user';

@Module({
  imports: [MongoDataServicesModule, CommandModule],
  providers: [OperatorUseCases, OperatorSeed],
  exports: [OperatorUseCases, OperatorSeed],
})
export class OperatorUseCasesModule {}
