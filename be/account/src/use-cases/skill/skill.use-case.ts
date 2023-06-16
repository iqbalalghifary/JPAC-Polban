import { Injectable } from '@nestjs/common';
import { Skill } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class SkillUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getSkill(item?: any) {
    return this.dataServices.skills.get(item);
  }

  createSkill(skill: Skill) {
    return this.dataServices.skills.create(skill);
  }

  updateSkill(data: any) {
    return this.dataServices.skills.updateOne(data.filters, data.payload);
  }

  deleteSkill(id: any) {
    return this.dataServices.skills.delete(id);
  }

  deleteAllSkill() {
    return this.dataServices.skills.deleteAll();
  }

}
