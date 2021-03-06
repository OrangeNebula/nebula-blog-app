import Title from '../../core/components/Typography/Title';

function ArticleList(props: { articles: { title: string }[] }) {
  const {
    articles,
  } = props;
  return (
    <div>
      {
        articles.map((item) => (
          <div>
            <Title>
              {' '}
              {item.title}
              {' '}
            </Title>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default ArticleList;
