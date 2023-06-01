import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../core';
import { config } from '../../config';
import {
  Alumni,
  AlumniSchema,
  Award,
  AwardSchema,
  Certification,
  CertificationSchema,
  Education,
  EducationSchema,
  Experience,
  ExperienceSchema,
  Operator,
  OperatorSchema,
  Organization,
  OrganizationSchema,
  Partner,
  PartnerSchema,
  Project,
  ProjectSchema,
  Skill,
  SkillSchema,
  Student,
  StudentSchema,
  User,
  UserSchema,
  Volunteer,
  VolunteerSchema  
} from './schema';
import { MongoDataServices } from './db-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Alumni.name, schema: AlumniSchema },
      { name: Award.name, schema: AwardSchema },
      { name: Certification.name, schema: CertificationSchema },
      { name: Education.name, schema: EducationSchema },
      { name: Experience.name, schema: ExperienceSchema },
      { name: Operator.name, schema: OperatorSchema },
      { name: Organization.name, schema: OrganizationSchema },
      { name: Partner.name, schema: PartnerSchema },
      { name: Project.name, schema: ProjectSchema },
      { name: Skill.name, schema: SkillSchema },
      { name: Student.name, schema: StudentSchema },
      { name: User.name, schema: UserSchema },
      { name: Volunteer.name, schema: VolunteerSchema }
    ]),
    MongooseModule.forRoot(config.MONGO_URI),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
