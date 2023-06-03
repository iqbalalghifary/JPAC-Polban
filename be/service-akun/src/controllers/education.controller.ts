import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResponseCreatedEducationDto } from '../core/dtos';
import { EducationUseCases } from '../use-cases/education';
import { Education } from 'src/core/entities';

@Controller('api/education')
export class EducationController {
  constructor(
    private educationUseCases: EducationUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.educationUseCases.getAllEducations();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.educationUseCases.getEducationById(id);
  }

  @Post()
  async createEducation(@Body() datas: Education) : Promise<ResponseCreatedEducationDto> {
    const responseCreatedEducationDto = new ResponseCreatedEducationDto();
    try {
      const createdEducation = await this.educationUseCases.createEducation(datas);
      responseCreatedEducationDto.success = true;
      responseCreatedEducationDto.createdEducation = createdEducation;
    } catch (error) {
      responseCreatedEducationDto.success = false;
    }
    return responseCreatedEducationDto;
  }

  @Put(':id')
  updateEducation(
    @Param('id') EducationId: string,
    @Body() datas: Education,
  ) {
    return this.educationUseCases.updateEducation(EducationId, datas);
  }

  @Delete(':id')
  deleteEducation(@Param('id') EducationId: string) {
    return this.educationUseCases.deleteEducation(EducationId);
  }

}
