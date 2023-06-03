import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserUseCases } from '../use-cases/user';
import { User } from 'src/core';

@Controller('api/user')
export class UserController {
  constructor(
    private userUseCases: UserUseCases
  ) {}

  @Get()
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: User) {
    try {
      return await this.userUseCases.createUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  @Put(':id')
  updateUser(
    @Param('id') UserId: string,
    @Body() user: User,
  ) {
    try {
      return this.userUseCases.updateUser(UserId, user);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.userUseCases.deleteUser(userId);
  }

}
