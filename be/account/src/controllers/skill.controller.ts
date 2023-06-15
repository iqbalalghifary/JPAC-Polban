import { Controller } from '@nestjs/common';
import { SkillUseCases } from '../use-cases/skill';
import { Skill } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/skill')
export class SkillController {
  constructor(
    private skillUseCases: SkillUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_skill' })
  async getAll() {
    try {
      return await this.skillUseCases.getAllSkills();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_skill' })
  async getById(id: any) {
    try {
      return await this.skillUseCases.getSkillById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_skill' })
  async createSkill(data: Skill) {
    try {
      return await this.skillUseCases.createSkill(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_skill' })
  async updateSkill(data: any) {
    try {
      return await this.skillUseCases.updateSkill(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_skill' })
  async deleteSkill(skillId: string) {
    try {
      return await this.skillUseCases.deleteSkill(skillId);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_all_skill' })
  async deleteAllAlumni() {
    try {
      return await this.skillUseCases.deleteAllSkill();
    } catch (error){
      console.log(error);
    }
  }

}
