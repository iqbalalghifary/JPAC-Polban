import { Skill } from '../entities';

export class ResponseCreatedSkillDto {
  success: boolean;
  createdSkill: Skill;
}
