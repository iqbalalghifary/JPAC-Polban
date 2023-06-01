import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OrganizationDocument = Organization & Document;

@Schema({ timestamps: true })
export class Organization {
  @Prop()
  organizationName: string;

  @Prop()
  positionHeld: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  description: Date;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
