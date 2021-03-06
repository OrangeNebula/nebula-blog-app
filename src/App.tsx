import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
// import Title from './core/components/Typography/Title';
// import Logo from './core/components/Logo/Logo';
// import Background from './core/components/Background/Background';
// import ArticleRepositoryMock from './Article/repository/ArticleRepository.mock';
// import ArticleList from './Article/components/ArticleList';
// import ArticleView from './Article/components/ArticleView';
// import { Article } from './Article/domain/Article';
import Header from './core/components/Header/Header';

/*
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
  );
}
*/

function App() {
  return (
    <Router>
      <Header />
      {/* <div className="App">
        <Background />
        <Logo />
        <Title>
          Nebula blog
        </Title>
        <MockScreen />
      </div> */}

    </Router>
  );
}

export default App;
