export abstract class Repository<T> {
  abstract get(): Promise<{ data: T[]; next: string | null }>;

  abstract update(item: T): Promise<void>;
}
