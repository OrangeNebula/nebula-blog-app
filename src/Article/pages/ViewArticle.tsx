import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AbstractArticleRepository } from '../repository/AbstractArticleRepository';
import { MathUtil } from '../../Core/util/MathUtil';
import { Article } from '../domain/Article';
import ArticleContent from '../components/ArticleContent';

type Props = {
  repository: AbstractArticleRepository;
}

export function ViewArticle({ repository }: Props) {
  const [article, setArticle] = useState<Article | null>(null);
  const history = useHistory();
  const { id } = useParams<{ id?: string | undefined }>();

  useEffect(() => {
    async function fetchArticle() {
      const item = await repository.find(MathUtil.parseNumber(id));
      if (!item) {
        history.push('/notfound');
      }
      setArticle(item);
    }
    if (!article) {
      fetchArticle();
    }
  });

  return (
    <>
      {
        !article && (<span> 로딩중 </span>)
      }
      {
        article && (
          <ArticleContent title={article.title} contents={article.contents} />
        )
      }
    </>
  );
}
