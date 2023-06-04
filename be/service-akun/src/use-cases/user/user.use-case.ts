import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private jwtService: JwtService
  ) {}

  async login(data: any){
    const user = await this.dataServices.users.findOne({ username: data.username })
    if(user && user.password == data.password){
      const payload = { role: user.userRole };
      return {
        access_token: this.jwtService.sign(payload)
      }
    }
  }

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
    return this.dataServices.users.updateOne(userId, User);
  }

  deleteUser(id: any): Promise<User> {
    return this.dataServices.users.delete(id);
  }

}
