import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop()
  projectName: string;

  @Prop()
  projectURL: string;

  @Prop()
  description: string;

  @Prop()
  startDate: Date;

  @Prop()
  startEnd: Date;

  @Prop()
  skill: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
