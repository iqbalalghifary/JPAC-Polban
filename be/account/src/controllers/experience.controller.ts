import { Controller } from '@nestjs/common';
import { ExperienceUseCases } from '../use-cases/experience';
import { Experience } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/experience')
export class ExperienceController {
  constructor(
    private experienceUseCases: ExperienceUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_experience' })
  async getAll() {
    try {
      return this.experienceUseCases.getAllExperiences();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_experience' })
  async getById(id: any) {
    try {
      return this.experienceUseCases.getExperienceById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_experience' })
  async createExperience(data: Experience) {
    try {
      return await this.experienceUseCases.createExperience(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_experience' })
  async updateExperience(data: any) {
    try {
      return await this.experienceUseCases.updateExperience(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_experience' })
  async deleteExperience(ExperienceId: string) {
    try {
      return await this.experienceUseCases.deleteExperience(ExperienceId);      
    } catch (error) {
      console.log(error); 
    }
  }

}
