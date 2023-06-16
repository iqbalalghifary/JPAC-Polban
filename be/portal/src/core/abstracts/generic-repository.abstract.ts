export abstract class IGenericRepository<T> {
  abstract get(item?: any): Promise<T[]>;

  abstract delete(id: string): Promise<T>;

  abstract deleteAll(): any;

  abstract create(item: T): Promise<T>;

  abstract updateOne(filters: T, item: T);

  abstract updateMultiple(id: string, item: T);

}
