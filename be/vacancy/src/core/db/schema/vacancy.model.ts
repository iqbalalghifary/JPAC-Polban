import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type VacancyDocument = Vacancy & Document;

@Schema()
export class Vacancy {
  @Prop({ required: true })
  title: string;

  @Prop({ enum: ["Full-time", "Internship"], required: true })
  field: string;

  @Prop({ required: true })
  target: string[];

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  deadline: Date;

  @Prop({ required: true })
  status: boolean;
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
