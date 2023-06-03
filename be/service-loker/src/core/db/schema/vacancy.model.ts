import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type VancancyDocument = Vancancy & Document;

@Schema()
export class Vancancy {
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

export const VancancySchema = SchemaFactory.createForClass(Vancancy);
