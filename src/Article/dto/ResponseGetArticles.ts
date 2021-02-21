import {Article} from '../domain/Article';

export default interface ResponseGetArticles {
  articles: Article[];
  next: string | null;
}