import { Injectable } from '@nestjs/common';
import { Agenda } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AgendaUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAgenda(item?: any) {
    return this.dataServices.agendas.get(item);
  }

  createAgenda(agenda: Agenda) {
    return this.dataServices.agendas.create(agenda);
  }

  updateAgenda(data: any) {
    return this.dataServices.agendas.updateOne(data.filters, data.payload);
  }

  deleteAgenda(id: any) {
    return this.dataServices.agendas.delete(id);
  }

  deleteAllAgenda() {
    return this.dataServices.agendas.deleteAll();
  }

}
