import { Injectable } from '@nestjs/common';
import { Agenda } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

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

  updateAgenda(data: any): Promise<Agenda> {
    return this.dataServices.agendas.update(data.id, data.payload);
  }

  deleteAgenda(id: any): Promise<Agenda> {
    return this.dataServices.agendas.delete(id);
  }

}
