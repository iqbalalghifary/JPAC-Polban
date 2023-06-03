import { 
  Controller, 
  Post, 
  Get,
  Put,
  Body,
  Param,
  Delete
} from '@nestjs/common';
import { OperatorUseCases } from 'src/use-cases/operator';
import { Operator } from '../core/entities';
import { ResponseRegisteredOperatorDto } from 'src/core/dtos';

@Controller('api/operator')
export class OperatorController {
  constructor(
    private OperatorUseCases: OperatorUseCases
  ) {}

  @Post('register')
  async register(@Body() datas: Operator) : Promise<ResponseRegisteredOperatorDto> {
    const responseRegisteredOperatorDto = new ResponseRegisteredOperatorDto();
    try {
      const registerOperator = await this.OperatorUseCases.registerOperator(datas);
      responseRegisteredOperatorDto.success = true;
      responseRegisteredOperatorDto.createdOperator = registerOperator[0];
      responseRegisteredOperatorDto.createdUser = registerOperator[1];
    } catch (error) {
      responseRegisteredOperatorDto.success = false;
    }

    return responseRegisteredOperatorDto;
  }

  @Get()
  async getAll() {
    return this.OperatorUseCases.getAllOperators();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.OperatorUseCases.getOperatorById(id);
  }

  @Put(':id')
  updateOperator(
    @Param('id') OperatorId: string,
    @Body() datas: Operator,
  ) {
    return this.OperatorUseCases.updateOperator(OperatorId, datas);
  }

  @Delete(':id')
  deleteOperator(@Param('id') OperatorId: string) {
    return this.OperatorUseCases.deleteOperator(OperatorId);
  }
}