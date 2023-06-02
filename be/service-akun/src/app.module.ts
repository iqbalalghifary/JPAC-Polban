import { Module } from '@nestjs/common';
import {
  AlumniController,
} from './controllers';
import { MongoDataServicesModule } from './core/db/db-data-services.module';
import { AlumniUseCasesModule } from './use-cases/alumni/alumni-use-cases.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    MongoDataServicesModule,
    AlumniUseCasesModule
  ],
  controllers: [
    AlumniController
  ],
  providers: [],
})
export class AppModule {}
