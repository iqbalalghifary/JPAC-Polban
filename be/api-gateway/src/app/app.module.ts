import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacancyModule } from 'src/vacancy/app.module';
import { PortalModule } from 'src/portal/app.module';
import { AccountModule } from 'src/account/app.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from './config';
import { JwtStrategy } from './guard/jwt.strategy';

@Module({
  imports: [
    VacancyModule, 
    PortalModule, 
    AccountModule,
    PassportModule, 
    JwtModule.register({
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: config.JWT_EXPIRED }
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
