import { Controller } from '@nestjs/common';
import { AwardUseCases } from '../use-cases/award';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/award')
export class AwardController {
  constructor(
    private awardUseCases: AwardUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_award' })
  async getAll() {
    try {
      return await this.awardUseCases.getAllAwards();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_award' })
  async getById(id: any) {
    try {
      return this.awardUseCases.getAwardById(id);     
    } catch (error) {
      console.log(error); 
    }    
  }

  @MessagePattern({ cmd: 'create_award' })
  async createAward(data: any) {
    try {
      return await this.awardUseCases.createAward(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_award' })
  updateAward(data: any) {
    try {
      return this.awardUseCases.updateAward(data);
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_award' })
  deleteAward(awardId: string) {
    try {
      return this.awardUseCases.deleteAward(awardId);      
    } catch (error) {
      console.log(error); 
    }
  }

}
