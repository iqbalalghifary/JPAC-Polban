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

  @Prop({ default: 'non-aktif', enum: ['non-aktif', 'diusulkan', 'aktif'] })
  status: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Award'}])
  awards: Award[];
  
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Certification'}])
  certifications: Certification[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Education'}])
  educations: Education[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Experience'}])
  experiences: Experience[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization'}])
  organizations: Organization[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Project'}])
  projects: Project[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill'}])
  skills: Skill[];
  
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer'}])
  volunteers: Volunteer[];

}

export const StudentSchema = SchemaFactory.createForClass(Student);
