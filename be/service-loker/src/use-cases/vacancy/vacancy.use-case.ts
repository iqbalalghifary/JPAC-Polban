import { Injectable } from '@nestjs/common';
import { Agenda } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { AgendaFactoryService } from './vacancy-factory.service';

@Injectable()
export class AgendaUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllAgendas(): Promise<Agenda[]> {
    return this.dataServices.agendas.getAll();
  }

  getAgendaById(id: any): Promise<Agenda> {
    return this.dataServices.agendas.get(id);
  }

  createAgenda(agenda: Agenda): Promise<Agenda> {
    return this.dataServices.agendas.create(agenda);
  }

  updateAgenda(agendaId: string, agenda: Agenda): Promise<Agenda> {
    return this.dataServices.agendas.update(agendaId, agenda);
  }

  deleteAgenda(id: any): Promise<Agenda> {
    return this.dataServices.agendas.delete(id);
  }

}
