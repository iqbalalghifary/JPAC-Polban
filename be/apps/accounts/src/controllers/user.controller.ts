import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { UserUseCases } from '../use-cases/user';
import { User } from 'src/core';
import { JwtAuthGuard } from 'src/use-cases/user/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/use-cases/user/guard/roles-auth.guard';
import { Roles } from 'src/use-cases/user/guard/roles-decorator';

@Controller('api/user')
export class UserController {
  constructor(
    private userUseCases: UserUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Sabihis')
  @Get()
  getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id') id: any) {
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

  @Post('login')
  login(@Body() user: User) {
    return this.userUseCases.login(user);
  }

  @Put('change-password/:id')
  updatePassword(
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
    try {
      return this.userUseCases.deleteUser(userId);
    } catch (error) {
      console.log(error);
    }
  }

}
