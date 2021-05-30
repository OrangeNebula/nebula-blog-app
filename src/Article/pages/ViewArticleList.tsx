import { useEffect, useState } from 'react';
import { Article } from '../domain/Article';
import ArticleList from '../components/ArticleList';
import { AbstractArticleRepository } from '../repository/AbstractArticleRepository';

type Props = {
  repository: AbstractArticleRepository;
}

export default function ViewArticleList({ repository }: Props) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchList() {
      const data = await repository.get();
      setArticles(data);
    }
    fetchList();
  });

  if (articles.length === 0) {
    return null;
  }

  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}
