import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GalleryDocument = Gallery & Document;

@Schema()
export class Gallery {
  @Prop({ required: true })
  photo: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: false })
  status: boolean;
}

export const GallerySchema = SchemaFactory.createForClass(Gallery);
