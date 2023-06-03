import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Alumni } from './alumni.model';

export type AwardDocument = Award & Document;

@Schema({ timestamps: true })
export class Award {
  @Prop()
  title: string;

  @Prop()
  issuedBy: string;

  @Prop()
  issueDate: Date;

  @Prop()
  description: string;
}

export const AwardSchema = SchemaFactory.createForClass(Award);
