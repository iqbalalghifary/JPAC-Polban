import { Injectable } from '@nestjs/common';
import { Agenda } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateAgendaDto, UpdateAgendaDto } from '../../core/dtos';
import { AgendaFactoryService } from './agenda-factory.service';

@Injectable()
export class AgendaUseCases {
  constructor(
    private dataServices: IDataServices,
    private agendaFactoryService: AgendaFactoryService,
  ) {}

  getAllAgendas(): Promise<Agenda[]> {
    return this.dataServices.agendas.getAll();
  }

  getAgendaById(id: any): Promise<Agenda> {
    return this.dataServices.agendas.get(id);
  }

  createAgenda(createAgendaDto: CreateAgendaDto): Promise<Agenda> {
    const agenda = this.agendaFactoryService.createNewAgenda(createAgendaDto);
    return this.dataServices.agendas.create(agenda);
  }

  updateAgenda(agendaId: string, updateAgendaDto: UpdateAgendaDto): Promise<Agenda> {
    const agenda = this.agendaFactoryService.updateAgenda(updateAgendaDto);
    return this.dataServices.agendas.update(agendaId, agenda);
  }

  deleteAgenda(id: any): Promise<Agenda> {
    return this.dataServices.agendas.delete(id);
  }

}
