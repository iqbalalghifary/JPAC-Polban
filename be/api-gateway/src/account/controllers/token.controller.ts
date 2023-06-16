import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { TokenUseCases } from '../use-cases/token';
import { Token } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/token')
export class TokenController {
  constructor(
    private tokenUseCases: TokenUseCases,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll(@Body() item?: any) {
    return this.tokenUseCases.getAllTokens(item);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get('filters')
  compareToken(@Body() item?: any) {
    return this.tokenUseCases.compareToken(item)
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
    return this.tokenUseCases.updateToken({ filters: { _id: tokenId }, payload: datas });
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
