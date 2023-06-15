import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CertificationDocument = Certification & Document;

@Schema({ timestamps: true })
export class Certification {
  @Prop()
  name: string;

  @Prop()
  issuedBy: string;

  @Prop()
  issueDate: string;

  @Prop()
  expirationDate: string;

  @Prop()
  credentialID: Date;

  @Prop({ default: null })
  skills: string[];
}

export const CertificationSchema = SchemaFactory.createForClass(Certification);
