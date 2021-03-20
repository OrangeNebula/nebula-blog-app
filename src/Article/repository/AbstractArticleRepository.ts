import { Repository } from '../../Core/repository/Repository';
import { Article } from '../domain/Article';

export abstract class AbstractArticleRepository extends Repository<Article> {
  abstract get(): Promise<{ data: Article[]; next: string }>;

  abstract find(id: number): Promise<Article | null>;

  abstract update(item: Article): Promise<void>;
}
