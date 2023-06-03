import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResponseCreatedSkillDto } from '../core/dtos';
import { SkillUseCases } from '../use-cases/skill';
import { Skill } from 'src/core/entities';

@Controller('api/skill')
export class SkillController {
  constructor(
    private skillUseCases: SkillUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.skillUseCases.getAllSkills();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.skillUseCases.getSkillById(id);
  }

  @Post()
  async createSkill(@Body() datas: Skill) : Promise<ResponseCreatedSkillDto> {
    const responseCreatedSkillDto = new ResponseCreatedSkillDto();
    try {
      const createdSkill = await this.skillUseCases.createSkill(datas);
      responseCreatedSkillDto.success = true;
      responseCreatedSkillDto.createdSkill = createdSkill;
    } catch (error) {
      responseCreatedSkillDto.success = false;
    }
    return responseCreatedSkillDto;
  }

  @Put(':id')
  updateSkill(
    @Param('id') SkillId: string,
    @Body() datas: Skill,
  ) {
    return this.skillUseCases.updateSkill(SkillId, datas);
  }

  @Delete(':id')
  deleteSkill(@Param('id') SkillId: string) {
    return this.skillUseCases.deleteSkill(SkillId);
  }

}
