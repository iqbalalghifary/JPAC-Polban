export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: string): Promise<T>;

  abstract delete(id: string): Promise<T>;

  abstract deleteAll(): Promise<T>;

  abstract findOne(item: any): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract updateOne(id: string, item: T);

  abstract updateMultiple(id: string, item: T);

}
