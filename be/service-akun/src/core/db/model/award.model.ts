import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AwardDocument = Award & Document;

@Schema({ timestamps: true })
export class Award {
  @Prop()
  title: string;

  @Prop()
  issuedBy: Date;

  @Prop()
  issueDate: string;

  @Prop()
  description: string;
}

export const AwardSchema = SchemaFactory.createForClass(Award);
