import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type IntershipScheduleDocument = IntershipSchedule & Document;

@Schema()
export class IntershipSchedule {
  @Prop({ required: true })
  major: string;

  @Prop({ required: true })
  studyProgram: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;
}

export const IntershipScheduleSchema = SchemaFactory.createForClass(IntershipSchedule);
