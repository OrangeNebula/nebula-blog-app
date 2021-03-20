import ReactMarkdown from 'react-markdown';
import Title from '../../Core/components/Typography/Title';

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
      <ReactMarkdown>
        { contents }
      </ReactMarkdown>
    </div>
  );
}

export default ArticleContent;
