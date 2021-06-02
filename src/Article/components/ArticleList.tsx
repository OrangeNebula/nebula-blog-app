import React from 'react';
import styles from './ArticleList.module.css';
import Subtitle from '../../Core/components/Typography/Subtitle';
import Caption from '../../Core/components/Typography/Caption';
import DateText from '../../Core/components/Date/DateText';
import { ArticleListItem } from '../domain/ArticleListItem';

type Props = {
  articles: ArticleListItem[],
}

function ArticleList({ articles }: Props) {
  return (
    <div className={styles.Wrap}>
      {
        articles.map((item) => (
          <div className={styles.Item} key={item.id}>
            <a href={`/articles/${item.id}`}>
              <Subtitle>
                {item.title}
              </Subtitle>
            </a>
            <div className={styles.CreateDate}>
              <Caption>
                <DateText date={item.createdAt} />
              </Caption>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ArticleList;
