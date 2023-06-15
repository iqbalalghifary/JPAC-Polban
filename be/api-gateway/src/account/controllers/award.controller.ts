import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { AwardUseCases } from '../use-cases/award';
import { Award } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/award')
export class AwardController {
  constructor(
    private awardUseCases: AwardUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.awardUseCases.getAllAwards();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') awardId: any) {
    return this.awardUseCases.getAwardById(awardId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  createAward(@Body() datas: Award) {
    return this.awardUseCases.createAward(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateAward(
    @Param('id') awardId: string,
    @Body() datas: Award,
  ) {
    return this.awardUseCases.updateAward({ id: awardId, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteAward(@Param('id') awardId: string) {
    return this.awardUseCases.deleteAward(awardId);
  }

}
