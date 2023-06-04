import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResponseCreatedVolunteerDto } from '../core/dtos';
import { VolunteerUseCases } from '../use-cases/volunteer';
import { Volunteer } from 'src/core/entities';

@Controller('api/volunteer')
export class VolunteerController {
  constructor(
    private volunteerUseCases: VolunteerUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.volunteerUseCases.getAllVolunteers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.volunteerUseCases.getVolunteerById(id);
  }

  @Post()
  async createVolunteer(@Body() datas: Volunteer) : Promise<ResponseCreatedVolunteerDto> {
    const responseCreatedVolunteerDto = new ResponseCreatedVolunteerDto();
    try {
      const createdVolunteer = await this.volunteerUseCases.createVolunteer(datas);
      responseCreatedVolunteerDto.success = true;
      responseCreatedVolunteerDto.createdVolunteer = createdVolunteer;
    } catch (error) {
      responseCreatedVolunteerDto.success = false;
    }
    return responseCreatedVolunteerDto;
  }

  @Put(':id')
  updateVolunteer(
    @Param('id') VolunteerId: string,
    @Body() datas: Volunteer,
  ) {
    return this.volunteerUseCases.updateVolunteer(VolunteerId, datas);
  }

  @Delete(':id')
  deleteVolunteer(@Param('id') VolunteerId: string) {
    return this.volunteerUseCases.deleteVolunteer(VolunteerId);
  }

}
