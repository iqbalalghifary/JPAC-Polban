import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateAgendaDto, UpdateAgendaDto, AgendaResponseDto } from '../core/dtos';
import { AgendaUseCases, AgendaFactoryService } from '../use-cases/auth';

@Controller('api/auth')
export class AuthController {
  constructor(
    private agendaUseCases: AgendaUseCases,
    private agendaFactoryService: AgendaFactoryService,
  ) {}

  @Post()
  async login(@Body() agendaDto: CreateAgendaDto) : Promise<AgendaResponseDto> {
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
  changePassword(
    @Param('id') agendaId: string,
    @Body() updateAgendaDto: UpdateAgendaDto,
  ) {
    const agenda = this.agendaFactoryService.updateAgenda(updateAgendaDto);
    return this.agendaUseCases.updateAgenda(agendaId, agenda);
  }

}
