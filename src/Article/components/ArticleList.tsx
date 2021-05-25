import React from 'react';
import Title from '../../Core/components/Typography/Title';
import styles from './ArticleList.module.css';
import { Article } from '../domain/Article';
import Subtitle from '../../Core/components/Typography/Subtitle';

type Props = {
  articles: Article[],
}

function ArticleList({ articles }: Props) {
  return (
    <div className={styles.Wrap}>
      {
        articles.map((item) => (
          <a href={`/articles/${item.id}`}>
            <Subtitle>
              {item.title}
            </Subtitle>
            <hr className={styles.Divider} />
          </a>
        ))
      }
    </div>
  );
}

export default ArticleList;
