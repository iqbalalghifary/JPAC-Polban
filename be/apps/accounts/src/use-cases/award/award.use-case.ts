import { Injectable } from '@nestjs/common';
import { Award } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AwardUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllAwards(): Promise<Award[]> {
    return this.dataServices.awards.getAll();
  }

  getAwardById(id: any): Promise<Award> {
    return this.dataServices.awards.get(id);
  }

  createAward(award: Award): Promise<Award> {
    return this.dataServices.awards.create(award);
  }

  updateAward(awardId: string, award: Award): Promise<Award> {
    return this.dataServices.awards.updateOne(awardId, award);
  }

  deleteAward(id: any): Promise<Award> {
    return this.dataServices.awards.delete(id);
  }

}
