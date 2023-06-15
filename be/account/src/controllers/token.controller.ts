import { Controller } from '@nestjs/common';
import { TokenUseCases } from '../use-cases/token';
import { Token } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/Token')
export class TokenController {
  constructor(
    private TokenUseCases: TokenUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_pattern' })
  async getAll() {
    try {
      return await this.TokenUseCases.getAllTokens();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_token' })
  async getById(id: any) {
    try {
      return await this.TokenUseCases.getTokenById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_token' })
  async createToken(data: Token) {
    try {
      return await this.TokenUseCases.createToken(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_token' })
  async updateToken(data: any) {
    try {
      return await this.TokenUseCases.updateToken(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_token' })
  async deleteToken(tokenId: string) {
    try {
      return await this.TokenUseCases.deleteToken(tokenId);      
    } catch (error) {
      console.log(error); 
    }
  }

}
