import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PartnerDocument = Partner & Document;

@Schema({ timestamps: true })
export class Partner {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  sector: string;

  @Prop({ required: true })
  logo: string;

  @Prop({ default: null })
  mou: string;

  @Prop({ required: true })
  website: string;

  @Prop({ default: false })
  status: boolean;

}

export const PartnerSchema = SchemaFactory.createForClass(Partner);
