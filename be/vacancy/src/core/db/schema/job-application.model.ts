import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
export type JobApplicationDocument = JobApplication & Document;

@Schema()
export class JobApplication {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  vacancy: any;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  applicant: any;
}

export const JobApplicationSchema = SchemaFactory.createForClass(JobApplication);
