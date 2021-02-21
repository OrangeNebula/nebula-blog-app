import ReactMarkdown from 'react-markdown';
import Title from '../../core/components/Typography/Title';

function ArticleView(props: { title: string; contents: string }) {
  return (
    <div>
      <Title> {props.title} </Title>
      <ReactMarkdown>
        { props.contents }
      </ReactMarkdown>
    </div>
  )
}

export default ArticleView;