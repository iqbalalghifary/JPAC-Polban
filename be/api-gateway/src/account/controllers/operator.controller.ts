import { 
  Controller, 
  Post, 
  Get,
  Put,
  Body,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { OperatorUseCases } from '../use-cases/operator';
import { Operator } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/operator')
export class OperatorController {
  constructor(
    private OperatorUseCases: OperatorUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post('register')
  register(@Body() datas: Operator) {
    return this.OperatorUseCases.registerOperator(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.OperatorUseCases.getAllOperators();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.OperatorUseCases.getOperatorById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateOperator(
    @Param('id') operatorId: string,
    @Body() datas: Operator,
  ) {
    return this.OperatorUseCases.updateOperator({ id: operatorId, payload: datas });
  }
  
  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteOperator(@Param('id') operatorId: string) {
    return this.OperatorUseCases.deleteOperator(operatorId);
  }
}