import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { AlumniFactoryService } from './alumni-factory.service';
import { AlumniUseCases } from './alumni.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AlumniFactoryService, AlumniUseCases],
  exports: [AlumniFactoryService, AlumniUseCases],
})
export class AlumniUseCasesModule {}
