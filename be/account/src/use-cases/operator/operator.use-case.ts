import { Injectable } from '@nestjs/common';
import { Operator } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class OperatorUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllOperators(): Promise<Operator[]> {
    return this.dataServices.operators.getAll();
  }

  getOperatorById(id: any): Promise<Operator> {
    return this.dataServices.operators.get(id);
  }

  registerOperator(data: Operator) {
    return this.dataServices.operators.create(data);
  }

  updateOperator(data: any): Promise<Operator> {
    return this.dataServices.operators.updateOne(data.id, data.payload);
  }

  deleteOperator(id: any): Promise<Operator> {
    return this.dataServices.operators.delete(id);
  }

}
