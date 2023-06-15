import { Injectable } from '@nestjs/common';
import { Token } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class TokenUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllTokens(): Promise<Token[]> {
    return this.dataServices.tokens.getAll();
  }

  getTokenById(id: any): Promise<Token> {
    return this.dataServices.tokens.get(id);
  }

  createToken(Token: Token): Promise<Token> {
    return this.dataServices.tokens.create(Token);
  }

  updateToken(data: any): Promise<Token> {
    return this.dataServices.tokens.updateOne(data.id, data.payload);
  }

  deleteToken(id: any): Promise<Token> {
    return this.dataServices.tokens.delete(id);
  }

}
