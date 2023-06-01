import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SkillDocument = Skill & Document;

@Schema({ timestamps: true })
export class Skill {
  @Prop()
  skillName: string;

  @Prop({ enum: [1, 2, 3, 4, 5] })
  level: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
