import { Controller, Res } from '@nestjs/common';
import { UserUseCases } from '../use-cases/user';
import { User } from 'src/core';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/user')
export class UserController {
  constructor(
    private userUseCases: UserUseCases
  ) {}

  @MessagePattern({ cmd: 'get_all_user' })
  async getAll() {
    try {
      return await this.userUseCases.getAllUsers();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'export_data_user' })
  async generatePDF(@Res() res): Promise<void> {
    const buffer = await this.userUseCases.generatePDF();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=exported-applications.pdf',
      'Content-Length': buffer.length,
    })

    res.end(buffer);
  }

  @MessagePattern({ cmd: 'get_by_id_user' })
  async getById(id: any) {
    try {
      return await this.userUseCases.getUserById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_user' })
  async createUser(user: User) {
    try {
      return await this.userUseCases.createUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'login' })
  async login(user: User) {
    try {
      return await this.userUseCases.login(user);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'update_password' })
  async updatePassword(data: any) {
    try {
      return await this.userUseCases.updateUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_user' })
  async deleteUser(userId: string) {
    try {
      return await this.userUseCases.deleteUser(userId);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_all_user' })
  async deleteAllAlumni() {
    try {
      return await this.userUseCases.deleteAllUser();
    } catch (error){
      console.log(error);
    }
  }

}
