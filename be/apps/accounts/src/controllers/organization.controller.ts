import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResponseCreatedOrganizationDto } from '../core/dtos';
import { OrganizationUseCases } from '../use-cases/organization';
import { Organization } from 'src/core/entities';

@Controller('api/organization')
export class OrganizationController {
  constructor(
    private organizationUseCases: OrganizationUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.organizationUseCases.getAllOrganizations();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.organizationUseCases.getOrganizationById(id);
  }

  @Post()
  async createOrganization(@Body() datas: Organization) : Promise<ResponseCreatedOrganizationDto> {
    const responseCreatedOrganizationDto = new ResponseCreatedOrganizationDto();
    try {
      const createdOrganization = await this.organizationUseCases.createOrganization(datas);
      responseCreatedOrganizationDto.success = true;
      responseCreatedOrganizationDto.createdOrganization = createdOrganization;
    } catch (error) {
      responseCreatedOrganizationDto.success = false;
    }
    return responseCreatedOrganizationDto;
  }

  @Put(':id')
  updateOrganization(
    @Param('id') OrganizationId: string,
    @Body() datas: Organization,
  ) {
    return this.organizationUseCases.updateOrganization(OrganizationId, datas);
  }

  @Delete(':id')
  deleteOrganization(@Param('id') OrganizationId: string) {
    return this.organizationUseCases.deleteOrganization(OrganizationId);
  }

}
