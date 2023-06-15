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
  graduationLetter: string;

  @Prop()
  yearGraduated: Number;

  @Prop({ default: null })
  receipt: string;

  @Prop({ default: null })
  validityPeriod: Date;

  @Prop({ enum: ['diusulkan', 'diverifikasi', 'aktif'] })
  status: string;

  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Award' }])
  awards: Award[];
  
  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Certification' }])
  certifications: Certification[];

  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Education' }])
  educations: Education[];

  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Experience' }])
  experiences: Experience[];

  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }])
  organizations: Organization[];

  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Project' }])
  projects: Project[];

  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }])
  skills: Skill[];
  
  @Prop([{ default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }])
  volunteers: Volunteer[];
}

export const AlumniSchema = SchemaFactory.createForClass(Alumni);
