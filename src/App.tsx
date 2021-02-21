import './App.css';
import Title from './core/components/Typography/Title';
import Logo from './core/components/Logo/Logo';
import Background from './core/components/Background/Background';
import ArticleRepositoryMock from './Article/repository/ArticleRepository.mock';
import ArticleList from './Article/components/ArticleList';
import ArticleView from './Article/components/ArticleView';
import {useEffect, useState} from 'react';
import {Article} from './Article/domain/Article';

function MockScreen() {
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
      {
        mockArticles.map((item) => (
          <ArticleView title={item.title} contents={item.contents} />
        ))
      }
    </>
  )
}

function App() {
  return (
    <div className="App">
      {/*<Background />*/}
      <Logo />
      <Title>
        Nebula blog
      </Title>
      <MockScreen />
    </div>
  );
}

export default App;
