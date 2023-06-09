import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { SkillUseCases } from './skill.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [SkillUseCases],
  exports: [SkillUseCases],
})
export class SkillUseCasesModule {}
