import ReactMarkdown from 'react-markdown';
import Title from '../../Core/components/Typography/Title';
import styles from './ArticleContent.module.css';

interface Props {
  title: string;
  contents: string;
}

function ArticleContent({ title, contents }: Props) {
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
    </div>
  );
}

export default ArticleContent;
