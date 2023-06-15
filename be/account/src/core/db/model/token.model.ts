import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TokenDocument = Token & Document;

@Schema({ timestamps: true })
export class Token {
  @Prop()
  token: string;

  @Prop()
  expiredAt: number;

  @Prop()
  isActive: boolean;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
