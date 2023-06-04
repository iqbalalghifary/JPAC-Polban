import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResponseCreatedProjectDto } from '../core/dtos';
import { ProjectUseCases } from '../use-cases/project';
import { Project } from 'src/core/entities';

@Controller('api/project')
export class ProjectController {
  constructor(
    private projectUseCases: ProjectUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.projectUseCases.getAllProjects();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.projectUseCases.getProjectById(id);
  }

  @Post()
  async createProject(@Body() datas: Project) : Promise<ResponseCreatedProjectDto> {
    const responseCreatedProjectDto = new ResponseCreatedProjectDto();
    try {
      const createdProject = await this.projectUseCases.createProject(datas);
      responseCreatedProjectDto.success = true;
      responseCreatedProjectDto.createdProject = createdProject;
    } catch (error) {
      responseCreatedProjectDto.success = false;
    }
    return responseCreatedProjectDto;
  }

  @Put(':id')
  updateProject(
    @Param('id') ProjectId: string,
    @Body() datas: Project,
  ) {
    return this.projectUseCases.updateProject(ProjectId, datas);
  }

  @Delete(':id')
  deleteProject(@Param('id') ProjectId: string) {
    return this.projectUseCases.deleteProject(ProjectId);
  }

}
