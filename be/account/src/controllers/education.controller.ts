import { Controller } from '@nestjs/common';
import { EducationUseCases } from '../use-cases/education';
import { Education } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/education')
export class EducationController {
  constructor(
    private educationUseCases: EducationUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_education' })
  async getAll() {
    try {
      return await this.educationUseCases.getAllEducations();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_education' })
  async getById(id: any) {
    try {
      return await this.educationUseCases.getEducationById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_education' })
  async createEducation(data: Education) {
    try {
      return await this.educationUseCases.createEducation(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'update_education' })
  async updateEducation(data: any) {
    try {
      return await this.educationUseCases.updateEducation(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_education' })
  async deleteEducation(educationId: string) {
    try {
      return await this.educationUseCases.deleteEducation(educationId);      
    } catch (error) {
      console.log(error); 
    }
  }

}
