import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { AgendaUseCases } from '../use-cases/agenda';
import { Agenda } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/agenda')
export class AgendaController {
  constructor(
    private agendaUseCases: AgendaUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.agendaUseCases.getAllAgendas();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.agendaUseCases.getAgendaById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  createAgenda(@Body() agenda: Agenda) {
    return this.agendaUseCases.createAgenda(agenda)
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateAgenda(
    @Param('id') agendaId: string,
    @Body() agenda: Agenda,
  ) {
    return this.agendaUseCases.updateAgenda({ filters: { _id: agendaId }, paylod: agenda });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteAgenda(@Param('id') agendaId: string) {
    return this.agendaUseCases.deleteAgenda(agendaId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete()
  deleteAllAgenda() {
    return this.agendaUseCases.deleteAllAgenda();
  }

}
