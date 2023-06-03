import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { PartnerUseCases } from './partner.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [PartnerUseCases],
  exports: [PartnerUseCases],
})
export class PartnerUseCasesModule {}
