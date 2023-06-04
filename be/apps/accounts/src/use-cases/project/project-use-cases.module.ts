import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { ProjectUseCases } from './project.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [ProjectUseCases],
  exports: [ProjectUseCases],
})
export class ProjectUseCasesModule {}
