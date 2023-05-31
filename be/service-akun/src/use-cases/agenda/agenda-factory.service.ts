import { Injectable } from '@nestjs/common';
import { Agenda } from '../../core/entities';
import { CreateAgendaDto, UpdateAgendaDto } from '../../core/dtos';

@Injectable()
export class AgendaFactoryService {
  createNewAgenda(createAgendaDto: CreateAgendaDto) {
    const newAgenda = new Agenda();
    newAgenda.title = createAgendaDto.title;
    newAgenda.description = createAgendaDto.description;
    newAgenda.slug = createAgendaDto.slug;
    newAgenda.startDate = createAgendaDto.startDate;
    newAgenda.endDate = createAgendaDto.endDate;
    newAgenda.publishDate = createAgendaDto.publishDate;
    return newAgenda;
  }

  updateAgenda(updateAgendaDto: UpdateAgendaDto) {
    const newAgenda = new Agenda();
    newAgenda.title = updateAgendaDto.title;
    newAgenda.description = updateAgendaDto.description;
    newAgenda.slug = updateAgendaDto.slug;
    newAgenda.startDate = updateAgendaDto.startDate;
    newAgenda.endDate = updateAgendaDto.endDate;
    newAgenda.publishDate = updateAgendaDto.publishDate;

    return newAgenda;
  }
}
