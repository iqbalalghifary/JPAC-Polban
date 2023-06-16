import { Injectable } from '@nestjs/common';
import { Award } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AwardUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAward(item?: any) {
    return this.dataServices.awards.get(item);
  }

  createAward(award: Award) {
    return this.dataServices.awards.create(award);
  }

  updateAward(data: any) {
    return this.dataServices.awards.updateOne(data.filters, data.payload);
  }

  deleteAward(id: any) {
    return this.dataServices.awards.delete(id);
  }

  deleteAllAward() {
    return this.dataServices.awards.deleteAll();
  }

}
