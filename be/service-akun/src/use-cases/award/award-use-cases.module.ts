import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { AwardUseCases } from './award.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AwardUseCases],
  exports: [AwardUseCases],
})
export class AwardUseCasesModule {}
