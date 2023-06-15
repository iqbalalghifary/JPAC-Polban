import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UpdateAgendaDto } from '../core/dtos';
import { AgendaUseCases } from '../use-cases/agenda';
import { Agenda } from '../core';

@Controller('api/agenda')
export class AgendaController {
  constructor(
    private agendaUseCases: AgendaUseCases
  ) {}

  @Get()
  getAll() {
    return this.agendaUseCases.getAllAgendas();
  }

  @Get(':id')
  getById(@Param('id') id: any) {
    return this.agendaUseCases.getAgendaById(id);
  }

  @Post()
  createAgenda(@Body() agenda: Agenda) {
    return this.agendaUseCases.createAgenda(agenda)
  }

  @Put(':id')
  updateAgenda(
    @Param('id') agendaId: string,
    @Body() agenda: Agenda,
  ) {
    return this.agendaUseCases.updateAgenda({ id: agendaId, paylod: agenda });
  }

  @Delete(':id')
  deleteAgenda(@Param('id') agendaId: string) {
    return this.agendaUseCases.deleteAgenda(agendaId);
  }

}
