import { Injectable } from '@nestjs/common';
import { Operator } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class OperatorUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getOperator(item?: any) {
    return this.dataServices.operators.get(item);
  }

  registerOperator(data: Operator) {
    return this.dataServices.operators.create(data);
  }

  updateOperator(data: any) {
    return this.dataServices.operators.updateOne(data.filters, data.payload);
  }

  deleteOperator(id: any) {
    return this.dataServices.operators.delete(id);
  }

  deleteAllOperator() {
    return this.dataServices.operators.deleteAll();
  }

}
