import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateAgendaDto, UpdateAgendaDto, AgendaResponseDto } from '../core/dtos';
import { AgendaUseCases, AgendaFactoryService } from '../use-cases/internship-shedule';

@Controller('api/agenda')
export class VacancyController {
  constructor(
    private agendaUseCases: AgendaUseCases,
    private agendaFactoryService: AgendaFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.agendaUseCases.getAllAgendas();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.agendaUseCases.getAgendaById(id);
  }

  @Post()
  async createAgenda(@Body() agendaDto: CreateAgendaDto) : Promise<AgendaResponseDto> {
    const agendaResponseDto = new AgendaResponseDto();
    try {
      const agenda = this.agendaFactoryService.createNewAgenda(agendaDto);
      const createdAgenda = await this.agendaUseCases.createAgenda(agenda);
      agendaResponseDto.success = true;
      agendaResponseDto.createdAgenda = createdAgenda;
    } catch (error) {
      agendaResponseDto.success = false;
    }
    return agendaResponseDto;
  }

  @Put(':id')
  updateAgenda(
    @Param('id') agendaId: string,
    @Body() updateAgendaDto: UpdateAgendaDto,
  ) {
    const agenda = this.agendaFactoryService.updateAgenda(updateAgendaDto);
    return this.agendaUseCases.updateAgenda(agendaId, agenda);
  }

  @Delete(':id')
  deleteAgenda(@Param('id') agendaId: string) {
    return this.agendaUseCases.deleteAgenda(agendaId);
  }

}
