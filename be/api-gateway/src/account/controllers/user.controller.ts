import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { UserUseCases } from '../use-cases/user';
import { User } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/user')
export class UserController {
  constructor(
    private userUseCases: UserUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  getAll() {
    return this.userUseCases.getAllUsers();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.userUseCases.getUserById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post()
  createUser(@Body() user: User) {
    return this.userUseCases.createUser(user);
  }

  @Post('login')
  login(@Body() user: User) {
    return this.userUseCases.login(user);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('change-password/:id')
  updatePassword(
    @Param('id') userId: string,
    @Body() user: User,
  ) {
    return this.userUseCases.updateUser({ filters: { _id: userId }, payload: user});
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.userUseCases.deleteUser(userId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllUser() {
    return this.userUseCases.deleteAllUser();
  }

}
