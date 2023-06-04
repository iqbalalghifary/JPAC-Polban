import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { ResponseCreatedAwardDto } from '../core/dtos';
import { AwardUseCases } from '../use-cases/award';
import { AlumniUseCases } from '../use-cases/alumni';
import { Award } from 'src/core/entities';

@Controller('api/award')
export class AwardController {
  constructor(
    private awardUseCases: AwardUseCases,
    private alumniUseCases: AlumniUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.awardUseCases.getAllAwards();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.awardUseCases.getAwardById(id);
  }

  @Post()
  async createAward(@Body() datas: Award, @Query() id: string) : Promise<ResponseCreatedAwardDto> {
    const responseCreatedAwardDto = new ResponseCreatedAwardDto();
    try {
      const createdAward = await this.awardUseCases.createAward(datas);
      responseCreatedAwardDto.success = true;
      responseCreatedAwardDto.createdAward = createdAward;
    } catch (error) {
      console.log(error);
      responseCreatedAwardDto.success = false;
    }
    return responseCreatedAwardDto;
  }

  @Put(':id')
  updateAward(
    @Param('id') awardId: string,
    @Body() datas: Award,
  ) {
    return this.awardUseCases.updateAward(awardId, datas);
  }

  @Delete(':id')
  deleteAward(@Param('id') awardId: string) {
    return this.awardUseCases.deleteAward(awardId);
  }

}
