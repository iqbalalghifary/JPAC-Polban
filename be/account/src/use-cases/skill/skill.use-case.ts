import { Injectable } from '@nestjs/common';
import { Skill } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class SkillUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllSkills() {
    return this.dataServices.skills.getAll();
  }

  getSkillById(id: any) {
    return this.dataServices.skills.get(id);
  }

  createSkill(skill: Skill) {
    return this.dataServices.skills.create(skill);
  }

  updateSkill(data: any) {
    return this.dataServices.skills.updateOne(data.id, data.payload);
  }

  deleteSkill(id: any) {
    return this.dataServices.skills.delete(id);
  }

  deleteAllSkill() {
    return this.dataServices.skills.deleteAll();
  }

}
