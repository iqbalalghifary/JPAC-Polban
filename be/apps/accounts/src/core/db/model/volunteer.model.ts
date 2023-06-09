import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type VolunteerDocument = Volunteer & Document;

@Schema({ timestamps: true })
export class Volunteer {
  @Prop()
  organization: string;

  @Prop()
  role: string;

  @Prop({ enum: [
    'animal welfare', 'arts and culture', 'children', 'civil rights and social action', 'economic empowerement', 'education', 'environment', 'health', 
    'human right', 'disaster and humanitarian relief', 'politics', 'poverty alleviation', 'science and technology', 'social service', 'veteran support'
  ] })
  cause: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  description: string;
}

export const VolunteerSchema = SchemaFactory.createForClass(Volunteer);
