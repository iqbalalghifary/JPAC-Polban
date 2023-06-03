import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { VolunteerUseCases } from './volunteer.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [VolunteerUseCases],
  exports: [VolunteerUseCases],
})
export class VolunteerUseCasesModule {}
