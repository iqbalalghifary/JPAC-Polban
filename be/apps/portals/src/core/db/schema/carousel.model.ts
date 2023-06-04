import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarouselDocument = Carousel & Document;

@Schema({ timestamps: true })
export class Carousel {
  @Prop({ required: true })
  photo: string;

  @Prop({ required: true, default: true })
  status: boolean;
}

export const CarouselSchema = SchemaFactory.createForClass(Carousel);
