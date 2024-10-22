import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AgendaDocument = Agenda & Document;

@Schema({ timestamps: true })
export class Agenda {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;
}

export const AgendaSchema = SchemaFactory.createForClass(Agenda);
