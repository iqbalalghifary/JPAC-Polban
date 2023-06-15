import { Controller } from '@nestjs/common';
import { OperatorUseCases } from 'src/use-cases/operator';
import { Operator } from '../core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/operator')
export class OperatorController {
  constructor(
    private OperatorUseCases: OperatorUseCases
  ) {}

  @MessagePattern({ cmd: 'get_all_operator' })
  async getAll() {
    try {
      return await this.OperatorUseCases.getAllOperators();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_operator' })
  async getById(id: any) {
    try {
      return this.OperatorUseCases.getOperatorById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create' })
  register(data: Operator) {
    try {
      return this.OperatorUseCases.registerOperator(data);
    } catch (error) {
      console.log(error)
    }
  }

  @MessagePattern({ cmd: 'update_operator' })
  updateOperator(data: any) {
    try {
      return this.OperatorUseCases.updateOperator(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_operator' })
  deleteOperator(operatorId: string) {
    try {
      return this.OperatorUseCases.deleteOperator(operatorId);      
    } catch (error) {
      console.log(error); 
    }
  }
}