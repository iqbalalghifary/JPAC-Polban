import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EducationDocument = Education & Document;

@Schema({ timestamps: true })
export class Education {
  @Prop()
  school: string;

  @Prop()
  degree: string;

  @Prop()
  fieldOfStudy: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop({ enum: ['male', 'female'] })
  grade: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
