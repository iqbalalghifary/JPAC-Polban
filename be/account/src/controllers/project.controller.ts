import { Controller } from '@nestjs/common';
import { ProjectUseCases } from '../use-cases/project';
import { Project } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/project')
export class ProjectController {
  constructor(
    private projectUseCases: ProjectUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_project' })
  async getAll() {
    try {
      return await this.projectUseCases.getAllProjects();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_project' })
  async getById(id: any) {
    try {
      return await this.projectUseCases.getProjectById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_project' })
  async createProject(data: Project) {
    try {
      return await this.projectUseCases.createProject(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_project' })
  async updateProject(data: any) {
    try {
      return await this.projectUseCases.updateProject(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_project' })
  async deleteProject(projectId: string) {
    try {
      return await this.projectUseCases.deleteProject(projectId);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_all_project' })
  async deleteAllAlumni() {
    try {
      return await this.projectUseCases.deleteAllProject();
    } catch (error){
      console.log(error);
    }
  }

}
