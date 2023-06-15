import { Model } from 'mongoose';
import { IGenericRepository } from '../../core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  findOne(data: any): Promise<T> {
    return this._repository.findOne(data).exec();
  }

  delete(id: any): Promise<T> {
    return this._repository.findByIdAndDelete(id).exec();
  }

  get(id: any): Promise<T> {
    return this._repository.findById(id).exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  updateOne(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  updateMultiple(id: string, item: T) {
    return this._repository.findByIdAndUpdate(
      id, 
      { $push: item },
      { new: true, useFindAndModify: false },
    );
  }
}
