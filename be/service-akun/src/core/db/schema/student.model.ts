import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Award } from './award.model';
import { Certification } from './certification.model';
import { Education } from './education.model';
import { Experience } from './experience.model';
import { Organization } from './organization.model';
import { Project } from './project.model';
import { Skill } from './skill.model';
import { Volunteer } from './volunteer.model';

export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student {
  @Prop()
  nim: Number;

  @Prop()
  name: string;

  @Prop()
  brifDescription: string;

  @Prop()
  email: string;

  @Prop()
  photo: string;

  @Prop()
  phone: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ enum: ['male', 'female'] })
  gender: string;

  @Prop()
  address: string;

  @Prop()
  major: string;

  @Prop()
  study_program: string;

  @Prop()
  year: string;

  @Prop()
  status: boolean;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'award', required: true })
  award: Award;
  
  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'certification', required: true })
  certification: Certification;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'education', required: true })
  education: Education;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'experience', required: true })
  experience: Experience;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'organization', required: true })
  organization: Organization;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'project', required: true })
  project: Project;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'skill', required: true })
  skill: Skill;
  
  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'volunteer', required: true })
  volunteer: Volunteer;

}

export const StudentSchema = SchemaFactory.createForClass(Student);
