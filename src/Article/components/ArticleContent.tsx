import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import Title from '../../Core/components/Typography/Title';
import styles from './ArticleContent.module.css';

interface Props {
  id: number;
  title: string;
  contents: string;
}

function ArticleContent({ title, contents, id }: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      FB.XFBML.parse();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div>
      <Title>
        {' '}
        {title}
        {' '}
      </Title>
      <ReactMarkdown className={styles.Wrap}>
        { contents }
      </ReactMarkdown>
      <div className={styles.Comment}>
        <div
          className="fb-comments"
          data-href={`https://orangenebula.io/articles/${id}`}
          data-width="100%"
          data-numposts="5"
        />
      </div>
    </div>
  );
}

export default ArticleContent;
