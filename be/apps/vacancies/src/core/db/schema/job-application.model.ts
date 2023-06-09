import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type JobApplicationDocument = JobApplication & Document;

@Schema()
export class JobApplication {
  @Prop({ required: true })
  vacancy: any;

  @Prop({ required: true, default: true })
  applicant: any;
}

export const JobApplicationSchema = SchemaFactory.createForClass(JobApplication);
