import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { SkillUseCases } from '../use-cases/skill';
import { Skill } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/skill')
export class SkillController {
  constructor(
    private skillUseCases: SkillUseCases,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.skillUseCases.getAllSkills();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.skillUseCases.getSkillById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  createSkill(@Body() datas: Skill) {
    return this.skillUseCases.createSkill(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateSkill(
    @Param('id') skillId: string,
    @Body() datas: Skill,
  ) {
    return this.skillUseCases.updateSkill({ id: skillId, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteSkill(@Param('id') skillId: string) {
    return this.skillUseCases.deleteSkill(skillId);
  }

}
