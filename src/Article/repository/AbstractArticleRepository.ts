import { Article } from '../domain/Article';
import { ArticleListItem } from '../domain/ArticleListItem';

export abstract class AbstractArticleRepository {
  abstract get(): Promise<ArticleListItem[]>;

  abstract find(id: number): Promise<Article | null>;

  abstract update(item: Article): Promise<void>;
}
