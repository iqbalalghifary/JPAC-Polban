import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AnnouncementDocument = Announcement & Document;

@Schema({ timestamps: true })
export class Announcement {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  photo: string;

  @Prop({ required: true, default: false })
  status: boolean;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
