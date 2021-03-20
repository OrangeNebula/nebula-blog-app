import React from 'react';
import Title from '../../Core/components/Typography/Title';
import styles from './ArticleList.module.css';
import { Article } from '../domain/Article';

type Props = {
  articles: Article[],
}

function ArticleList({ articles }: Props) {
  return (
    <div>
      {
        articles.map((item) => (
          <a href={`/articles/${item.id}`}>
            <Title>
              {item.title}
            </Title>
            <hr className={styles.Divider} />
          </a>
        ))
      }
    </div>
  );
}

export default ArticleList;
