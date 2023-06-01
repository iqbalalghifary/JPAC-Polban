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

export type AlumniDocument = Alumni & Document;

@Schema({ timestamps: true })
export class Alumni {
  @Prop()
  name: string;

  @Prop()
  brifDescription: string;

  @Prop()
  photo: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ enum: ['male', 'female'] })
  gender: string;

  @Prop()
  address: string;

  @Prop()
  yearGraduated: Number;

  @Prop()
  receipt: string;

  @Prop()
  validityPeriod: Date;

  @Prop({ default: false })
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

export const AlumniSchema = SchemaFactory.createForClass(Alumni);
