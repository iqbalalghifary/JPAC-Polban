import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { OrganizationUseCases } from './organization.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [OrganizationUseCases],
  exports: [OrganizationUseCases],
})
export class OrganizationUseCasesModule {}
