import Title from '../../core/components/Typography/Title';

function ArticleList(props: { articles: { title: string }[] }) {
  return (
    <div>
      {
        props.articles.map((item) => (
          <div>
            <Title> {item.title} </Title>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default ArticleList;
