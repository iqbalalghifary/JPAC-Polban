import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], refPath: 'role', required: true })
  references: any;

  @Prop({ type: String, enum: ['applicant','operator', 'partner' ], required: true })
  role: any;
}

export const UserSchema = SchemaFactory.createForClass(User);
