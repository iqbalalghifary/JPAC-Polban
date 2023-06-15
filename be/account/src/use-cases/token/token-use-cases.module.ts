import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { TokenUseCases } from './token.use-case';

@Module({
  imports: [MongoDataServicesModule],
  providers: [TokenUseCases],
  exports: [TokenUseCases],
})
export class TokenUseCasesModule {}
