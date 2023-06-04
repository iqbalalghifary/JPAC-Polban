import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OperatorDocument = Operator & Document;

@Schema({ timestamps: true })
export class Operator {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['male', 'female'] })
  gender: string;

  @Prop({ required: true })
  position: string;
}

export const OperatorSchema = SchemaFactory.createForClass(Operator);
