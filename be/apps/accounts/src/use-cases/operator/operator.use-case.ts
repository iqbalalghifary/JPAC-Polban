import { Injectable } from '@nestjs/common';
import { Operator, User } from '../../core/entities';
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

  // getOperatorByNim(nim: Number): Promise<Operator> {
  //   return this.dataServices.operators.getByNim(nim);
  // }

  registerOperator(datas: Operator): Promise<any>[] {
    const newOperator = new Operator();
    // return Operator;
    const operator =  this.dataServices.operators.create(newOperator);
    const newUser = new User();
    // newApplicant.username = Operator.email;
    const user =  this.dataServices.users.create(newUser);
    return [operator, user];
  }

  updateOperator(OperatorId: string, Operator: Operator): Promise<Operator> {
    return this.dataServices.operators.updateOne(OperatorId, Operator);
  }

  deleteOperator(id: any): Promise<Operator> {
    return this.dataServices.operators.delete(id);
  }

}
