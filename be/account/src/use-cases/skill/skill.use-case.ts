import { Injectable } from '@nestjs/common';
import { Skill } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class SkillUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllSkills(): Promise<Skill[]> {
    return this.dataServices.skills.getAll();
  }

  getSkillById(id: any): Promise<Skill> {
    return this.dataServices.skills.get(id);
  }

  createSkill(skill: Skill): Promise<Skill> {
    return this.dataServices.skills.create(skill);
  }

  updateSkill(data: any): Promise<Skill> {
    return this.dataServices.skills.updateOne(data.id, data.payload);
  }

  deleteSkill(id: any): Promise<Skill> {
    return this.dataServices.skills.delete(id);
  }

}
