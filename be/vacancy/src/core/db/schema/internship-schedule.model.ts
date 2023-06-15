import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type InternshipScheduleDocument = InternshipSchedule & Document;

@Schema()
export class InternshipSchedule {
  @Prop({ required: true })
  major: string;

  @Prop({ required: true })
  studyProgram: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;
}

export const InternshipScheduleSchema = SchemaFactory.createForClass(InternshipSchedule);
