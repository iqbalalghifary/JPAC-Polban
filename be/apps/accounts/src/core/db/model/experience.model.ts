import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ExperienceDocument = Experience & Document;

@Schema({ timestamps: true })
export class Experience {
  @Prop()
  title: string;

  @Prop({ enum: ['full-time', 'part-time', 'freelance', 'contract', 'internship'] })
  employmentType: string;

  @Prop()
  companyName: string;

  @Prop({ enum: ['on-site', 'hybrid', 'remote'] })
  locationType: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  description: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
