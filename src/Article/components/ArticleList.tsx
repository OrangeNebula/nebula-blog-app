import React from 'react';
import styles from './ArticleList.module.css';
import { Article } from '../domain/Article';
import Subtitle from '../../Core/components/Typography/Subtitle';
import Caption from '../../Core/components/Typography/Caption';
import DateText from '../../Core/components/Date/DateText';

type Props = {
  articles: Article[],
}

function ArticleList({ articles }: Props) {
  return (
    <div className={styles.Wrap}>
      {
        articles.map((item) => (
          <div className={styles.Item}>
            <a href={`/articles/${item.id}`}>
              <Subtitle>
                {item.title}
              </Subtitle>
            </a>
            <Caption>
              <DateText date={item.createdAt} />
            </Caption>
          </div>
        ))
      }
    </div>
  );
}

export default ArticleList;
