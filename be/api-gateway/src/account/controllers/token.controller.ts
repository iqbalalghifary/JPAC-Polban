import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { TokenUseCases } from '../use-cases/token';
import { Token } from '../core';

@Controller('api/token')
export class TokenController {
  constructor(
    private tokenUseCases: TokenUseCases,
  ) {}

  @Get()
  getAll(@Body() item?: any) {
    return this.tokenUseCases.getAllTokens(item);
  }

  @Post('filters')
  compareToken(@Body() item?: any) {
    return this.tokenUseCases.compareToken(item)
  }

  @Get(':id')
  getById(@Param('id') id: any) {
    return this.tokenUseCases.getTokenById(id);
  }

  @Post()
  createToken(@Body() datas: Token) {
    return this.tokenUseCases.createToken(datas);
  }

  @Put(':id')
  updateToken(
    @Param('id') tokenId: string,
    @Body() datas: Token,
  ) {
    return this.tokenUseCases.updateToken({ filters: { _id: tokenId }, payload: datas });
  }

  @Delete(':id')
  deleteToken(@Param('id') tokenId: string) {
    return this.tokenUseCases.deleteToken(tokenId);
  }

  @Delete()
  deleteAllToken() {
    return this.tokenUseCases.deleteAllToken();
  }

}
