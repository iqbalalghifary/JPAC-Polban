import { Controller} from '@nestjs/common';
import { AgendaUseCases, AgendaFactoryService } from '../use-cases/agenda';
import { MessagePattern } from '@nestjs/microservices';
import { Agenda } from 'src/core';

@Controller('api/agenda')
export class AgendaController {
  constructor(
    private agendaUseCases: AgendaUseCases
  ) {}

  @MessagePattern({ cmd: 'get_all_agenda' })
  async getAll() {
    try {
      return await this.agendaUseCases.getAgenda();
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_by_id_agenda' })
  async getById(id: any) {
    try {
      return await this.agendaUseCases.getAgenda({ _id: id });
    } catch (error) {
      console.log(error);      
    }
  }

  @MessagePattern({ cmd: 'create_agenda' })
  async createAgenda(data: Agenda) {
    try {
      return await this.agendaUseCases.createAgenda(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_agenda' })
  async updateAgenda(data: any) {
    try {
      return await this.agendaUseCases.updateAgenda(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_agenda' })
  async deleteAgenda(agendaId: string) {
    try {
      return await this.agendaUseCases.deleteAgenda(agendaId);
    } catch (error) {
      console.log(error);      
    }
  }

  @MessagePattern({ cmd: 'delete_all_agenda' })
  async deleteAllAgenda() {
    try {
      return await this.agendaUseCases.deleteAllAgenda();
    } catch (error){
      console.log(error);
    }
  }


}
