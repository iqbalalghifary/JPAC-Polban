import { Injectable } from '@nestjs/common';
import { Award } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AwardUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllAwards() {
    return this.dataServices.awards.getAll();
  }

  getAwardById(id: any) {
    return this.dataServices.awards.get(id);
  }

  createAward(award: Award) {
    return this.dataServices.awards.create(award);
  }

  updateAward(data: any) {
    return this.dataServices.awards.updateOne(data.id, data.payload);
  }

  deleteAward(id: any) {
    return this.dataServices.awards.delete(id);
  }

  deleteAllAward() {
    return this.dataServices.awards.deleteAll();
  }

}
