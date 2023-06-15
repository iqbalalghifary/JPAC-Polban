import { Module } from '@nestjs/common';
import { 
  AlumniController, 
  AwardController,
  CertificationController,
  EducationController,
  ExperienceController,
  OperatorController,
  OrganizationController,
  PartnerController,
  ProjectController,
  SkillController,
  StudentController,
  TokenController,
  UserController, 
  VolunteerController
} from './controllers';
import { MongoDataServicesModule } from './core/db/db-data-services.module';
import { AlumniUseCasesModule } from './use-cases/alumni/alumni-use-cases.module';
import { AwardUseCasesModule } from './use-cases/award/award-use-cases.module';
import { CertificationUseCasesModule } from './use-cases/certification/certification-use-cases.module';
import { EducationUseCasesModule } from './use-cases/education/education-use-cases.module';
import { ExperienceUseCasesModule } from './use-cases/experience/experience-use-cases.module';
import { OperatorUseCasesModule } from './use-cases/operator/operator-use-cases.module';
import { OrganizationUseCasesModule } from './use-cases/organization/organization-use-cases.module';
import { PartnerUseCasesModule } from './use-cases/partner/partner-use-cases.module';
import { ProjectUseCasesModule } from './use-cases/project/project-use-cases.module';
import { SkillUseCasesModule } from './use-cases/skill/skill-use-cases.module';
import { StudentUseCasesModule } from './use-cases/student/student-use-cases.module';
import { TokenUseCasesModule } from './use-cases/token/token-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { VolunteerUseCasesModule } from './use-cases/volunteer/volunteer-use-cases.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    MongoDataServicesModule,
    AlumniUseCasesModule,
    AwardUseCasesModule,
    CertificationUseCasesModule,
    EducationUseCasesModule,
    ExperienceUseCasesModule,
    OperatorUseCasesModule,
    OrganizationUseCasesModule,
    PartnerUseCasesModule,
    ProjectUseCasesModule,
    SkillUseCasesModule,
    StudentUseCasesModule,
    TokenUseCasesModule,
    UserUseCasesModule,
    VolunteerUseCasesModule,
  ],
  controllers: [
    AlumniController,
    AwardController,
    CertificationController,
    EducationController,
    ExperienceController,
    OperatorController,
    OrganizationController,
    PartnerController,
    ProjectController,
    SkillController,
    StudentController,
    TokenController,
    UserController,
    VolunteerController
  ],
  providers: [],
})
export class AppModule {}
