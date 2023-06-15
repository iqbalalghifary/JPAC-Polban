import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { ExperienceUseCases } from './experience.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [ExperienceUseCases],
  exports: [ExperienceUseCases],
})
export class ExperienceUseCasesModule {}
