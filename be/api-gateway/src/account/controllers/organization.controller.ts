import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { OrganizationUseCases } from '../use-cases/organization';
import { Organization } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/organization')
export class OrganizationController {
  constructor(
    private organizationUseCases: OrganizationUseCases,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.organizationUseCases.getAllOrganizations();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.organizationUseCases.getOrganizationById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  createOrganization(@Body() datas: Organization) {
    return this.organizationUseCases.createOrganization(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateOrganization(
    @Param('id') organizationId: string,
    @Body() datas: Organization,
  ) {
    return this.organizationUseCases.updateOrganization({ filters: { _id: organizationId }, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteOrganization(@Param('id') organizationId: string) {
    return this.organizationUseCases.deleteOrganization(organizationId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete()
  deleteAllOrganization() {
    return this.organizationUseCases.deleteAllOrganization();
  }

}
