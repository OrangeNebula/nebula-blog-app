import { useEffect, useState } from 'react';
import { Article } from '../domain/Article';
import ArticleRepositoryMock from '../repository/ArticleRepository.mock';
import ArticleList from '../components/ArticleList';
import ArticleView from '../components/ArticleView';

export default function Articles() {
  const [mockArticles, setMockData] = useState<Article[]>([]);

  useEffect(() => {
    async function mockUp() {
      const mockRepository = new ArticleRepositoryMock();
      const mockData = await mockRepository.get();
      setMockData(mockData.data);
    }

    mockUp();
  });

  if (mockArticles.length === 0) {
    return null;
  }

  return (
    <>
      <ArticleList articles={mockArticles} />
      {/* {
        mockArticles.map((item) => (
          <ArticleView title={item.title} contents={item.contents} />
        ))
      } */}
    </>
  );
}
