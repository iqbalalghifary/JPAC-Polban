import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TokenDocument = Token & Document;

@Schema({ timestamps: true })
export class Token {
  @Prop()
  token: string;

  @Prop()
  expiredAt: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, refPath: 'userRole', required: true })
  referenceAttributeId: any;

  @Prop({ type: String, enum: ['Alumni','Partner'], required: true })
  userRole: any;

  @Prop()
  isActive: boolean;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
