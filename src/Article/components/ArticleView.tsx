import ReactMarkdown from 'react-markdown';
import Title from '../../core/components/Typography/Title';

interface Props {
  title: string;
  contents: string;
}

function ArticleView({ title, contents }: Props) {
  return (
    <div>
      <Title>
        {' '}
        {title}
        {' '}
      </Title>
      <ReactMarkdown>
        { contents }
      </ReactMarkdown>
    </div>
  );
}

export default ArticleView;
