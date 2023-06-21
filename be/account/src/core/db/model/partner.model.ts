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

  @Prop()
  description: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  sector: string;

  @Prop({ default: null })
  logo: string;

  @Prop({ default: null })
  mou: string;

  @Prop({ required: true })
  website: string;

  @Prop({ default: 'diusulkan', enum: ['diusulkan', 'diverifikasi', 'aktif'] })
  status: string;

}

export const PartnerSchema = SchemaFactory.createForClass(Partner);
