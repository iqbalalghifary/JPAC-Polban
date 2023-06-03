import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { CertificationUseCases } from './certification.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [CertificationUseCases],
  exports: [CertificationUseCases],
})
export class CertificationUseCasesModule {}
