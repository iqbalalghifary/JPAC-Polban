import { Injectable } from '@nestjs/common';
import slugify from 'slugify';

@Injectable()
export class OperatorFactoryService {
  // createNewAgenda(createAgendaDto: CreateAgendaDto) {
  //   const newAgenda = new Agenda();
  //   newAgenda.title = createAgendaDto.title;
  //   newAgenda.description = createAgendaDto.description;
  //   newAgenda.slug = slugify(createAgendaDto.title);
  //   newAgenda.startDate = createAgendaDto.startDate;
  //   newAgenda.endDate = createAgendaDto.endDate;
  //   newAgenda.publishDate = new Date(Date.now());
  //   return newAgenda;
  // }

  // updateAgenda(updateAgendaDto: UpdateAgendaDto) {
  //   const newAgenda = new Agenda();
  //   newAgenda.title = updateAgendaDto.title;
  //   newAgenda.description = updateAgendaDto.description;
  //   newAgenda.slug = slugify(updateAgendaDto.title);
  //   newAgenda.startDate = updateAgendaDto.startDate;
  //   newAgenda.endDate = updateAgendaDto.endDate;
  //   newAgenda.publishDate = new Date(Date.now());

  //   return newAgenda;
  // }
}
