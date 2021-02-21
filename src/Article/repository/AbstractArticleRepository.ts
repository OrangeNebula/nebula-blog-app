import {Repository} from '../../core/repository/Repository';
import {Article} from '../domain/Article';

export abstract class AbstractArticleRepository extends Repository<Article> {
  abstract get(): Promise<{ data: Article[]; next: string }>;

  abstract update(item: Article): Promise<void>;
}