import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { ResponseCreatedTokenDto } from '../core/dtos';
import { TokenUseCases } from '../use-cases/Token';
import { Token } from 'src/core/entities';

@Controller('api/Token')
export class TokenController {
  constructor(
    private TokenUseCases: TokenUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.TokenUseCases.getAllTokens();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.TokenUseCases.getTokenById(id);
  }

  @Post()
  async createToken(@Body() datas: Token, @Query() id: string) : Promise<ResponseCreatedTokenDto> {
    const responseCreatedTokenDto = new ResponseCreatedTokenDto();
    try {
      const createdToken = await this.TokenUseCases.createToken(datas);
      responseCreatedTokenDto.success = true;
      responseCreatedTokenDto.createdToken = createdToken;
    } catch (error) {
      console.log(error);
      responseCreatedTokenDto.success = false;
    }
    return responseCreatedTokenDto;
  }

  @Put(':id')
  updateToken(
    @Param('id') TokenId: string,
    @Body() datas: Token,
  ) {
    return this.TokenUseCases.updateToken(TokenId, datas);
  }

  @Delete(':id')
  deleteToken(@Param('id') TokenId: string) {
    return this.TokenUseCases.deleteToken(TokenId);
  }

}
