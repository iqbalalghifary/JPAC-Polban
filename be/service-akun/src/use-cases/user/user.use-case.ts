import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.dataServices.users.getAll();
  }

  getUserById(id: any): Promise<User> {
    return this.dataServices.users.get(id);
  }

  createUser(User: User): Promise<User> {
    return this.dataServices.users.create(User);
  }

  updateUser(userId: string, User: User): Promise<User> {
    return this.dataServices.users.update(userId, User);
  }

  deleteUser(id: any): Promise<User> {
    return this.dataServices.users.delete(id);
  }

}
