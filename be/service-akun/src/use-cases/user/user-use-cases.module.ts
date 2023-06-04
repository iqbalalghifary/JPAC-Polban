import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../core/db/db-data-services.module';
import { UserUseCases } from './user.use-case';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [MongoDataServicesModule, PassportModule, JwtModule.register({
    secret: config.JWT_SECRET,
    signOptions: { expiresIn: config.JWT_EXPIRED }
  })],
  providers: [UserUseCases, JwtStrategy],
  exports: [UserUseCases, JwtStrategy],
})
export class UserUseCasesModule {}
