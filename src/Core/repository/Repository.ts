export abstract class Repository<T> {
  abstract get(): Promise<T[]>;

  abstract update(item: T): Promise<void>;
}
