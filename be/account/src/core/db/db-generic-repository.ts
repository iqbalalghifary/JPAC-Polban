import { Model } from 'mongoose';
import { IGenericRepository } from '../../core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  get(item: any): Promise<T[]> {
    return this._repository.find(item).populate(this._populateOnFind).exec();
  }

  deleteAll(): Promise<T> {
    return this._repository.remove().exec();
  }  

  delete(id: any): Promise<T> {
    return this._repository.findByIdAndDelete(id).exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  updateOne(filters: T, item: T) {
    return this._repository.findOneAndUpdate(filters, item);
  }

  updateMultiple(id: string, item: T) {
    return this._repository.findByIdAndUpdate(
      id, 
      { $push: item },
      { new: true, useFindAndModify: false },
    );
  }
}
