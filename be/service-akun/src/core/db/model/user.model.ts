import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, refPath: 'userRole', required: true })
  referenceAttributeId: any;

  @Prop({ type: String, enum: ['Alumni','Student','Operator','Partner'], required: true })
  userRole: any;
}

export const UserSchema = SchemaFactory.createForClass(User);
