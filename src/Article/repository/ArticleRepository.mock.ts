import axios from 'axios';
import { Article } from '../domain/Article';
import { AbstractArticleRepository } from './AbstractArticleRepository';
import { ArticleListItem } from '../domain/ArticleListItem';
import ResponseGetArticles from '../dto/ResponseGetArticles';

export default class ArticleRepositoryMock extends AbstractArticleRepository {
  async get(): Promise<ArticleListItem[]> {
    const response = await axios(`${process.env.PUBLIC_URL}/articles/index.json`);
    const index = response.data as ResponseGetArticles;
    return index.articles.sort((a, b) => (a.id < b.id ? 1 : -1)).map((item) => (
      new ArticleListItem(
        item.id,
        item.title,
        new Date(item.createdAt),
        item.url,
      )
    ));
  }

  async find(id: number): Promise<Article | null> {
    const item = (await this.get()).find((node) => node.id === id);
    if (!item) {
      return null;
    }
    const response = await axios(item.url);
    const contents = response.data;
    return Promise.resolve(new Article(
      item.id,
      item.title,
      contents,
      new Date(),
      new Date(),
    ));
  }

  update(item: Article): Promise<void> {
    return Promise.resolve(undefined);
  }
}
