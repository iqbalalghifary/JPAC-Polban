import { Module } from '@nestjs/common';
import { AlumniController, UserController, AwardController } from './controllers';
import { MongoDataServicesModule } from './core/db/db-data-services.module';
import { AlumniUseCasesModule } from './use-cases/alumni/alumni-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { AwardUseCasesModule } from './use-cases/award/award-use-cases.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    MongoDataServicesModule,
    AlumniUseCasesModule,
    UserUseCasesModule,
    AwardUseCasesModule
  ],
  controllers: [
    AlumniController,
    UserController,
    AwardController
  ],
  providers: [],
})
export class AppModule {}
