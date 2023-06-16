import { Injectable } from '@nestjs/common';
import { Token } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class TokenUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getToken(item?: any) {
    return this.dataServices.tokens.get(item);
  }

  async compareToken(item?: any) {
    const token = await this.dataServices.tokens.get(item);
    if(token && token[0].expiredAt > Date.now() && token[0].isActive == true){
      return token;
    } else {
      return "Token has expired"
    }
  }

  createToken(Token: Token) {
    return this.dataServices.tokens.create(Token);
  }

  updateToken(data: any) {
    return this.dataServices.tokens.updateOne(data.filters, data.payload);
  }

  deleteToken(id: any) {
    return this.dataServices.tokens.delete(id);
  }

  deleteAllToken() {
    return this.dataServices.tokens.deleteAll();
  }

}
