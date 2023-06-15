import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { TokenUseCases } from '../use-cases/token';
import { Token } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/Token')
export class TokenController {
  constructor(
    private tokenUseCases: TokenUseCases,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.tokenUseCases.getAllTokens();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.tokenUseCases.getTokenById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  createToken(@Body() datas: Token) {
    return this.tokenUseCases.createToken(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateToken(
    @Param('id') tokenId: string,
    @Body() datas: Token,
  ) {
    return this.tokenUseCases.updateToken({ id: tokenId, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteToken(@Param('id') tokenId: string) {
    return this.tokenUseCases.deleteToken(tokenId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete()
  deleteAllToken() {
    return this.tokenUseCases.deleteAllToken();
  }

}
