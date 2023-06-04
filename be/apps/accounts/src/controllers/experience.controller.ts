import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResponseCreatedExperienceDto } from '../core/dtos';
import { ExperienceUseCases } from '../use-cases/experience';
import { Experience } from 'src/core/entities';

@Controller('api/experience')
export class ExperienceController {
  constructor(
    private experienceUseCases: ExperienceUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.experienceUseCases.getAllExperiences();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.experienceUseCases.getExperienceById(id);
  }

  @Post()
  async createExperience(@Body() datas: Experience) : Promise<ResponseCreatedExperienceDto> {
    const responseCreatedExperienceDto = new ResponseCreatedExperienceDto();
    try {
      const createdExperience = await this.experienceUseCases.createExperience(datas);
      responseCreatedExperienceDto.success = true;
      responseCreatedExperienceDto.createdExperience = createdExperience;
    } catch (error) {
      responseCreatedExperienceDto.success = false;
    }
    return responseCreatedExperienceDto;
  }

  @Put(':id')
  updateExperience(
    @Param('id') ExperienceId: string,
    @Body() datas: Experience,
  ) {
    return this.experienceUseCases.updateExperience(ExperienceId, datas);
  }

  @Delete(':id')
  deleteExperience(@Param('id') ExperienceId: string) {
    return this.experienceUseCases.deleteExperience(ExperienceId);
  }

}
