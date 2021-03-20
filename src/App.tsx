import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Core/components/Header/Header';
import About from './About/pages/About';
import ViewArticleList from './Article/pages/ViewArticleList';
import Home from './Home/pages/Home';
import Background from './Core/components/Background/Background';
import { NotFound } from './Core/pages/NotFound';
import { ViewArticle } from './Article/pages/ViewArticle';
import ArticleRepositoryMock from './Article/repository/ArticleRepository.mock';

function App() {
  const articleRepository = new ArticleRepositoryMock();

  return (
    <div className="App">
      {/* <Background /> */}
      <Router>
        <Header
          items={[
            { label: 'Home', path: '/home' },
            { label: 'About', path: '/about' },
            { label: 'Articles', path: '/articles' },
          ]}
        />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles/:id">
            <ViewArticle repository={articleRepository} />
          </Route>
          <Route path="/articles">
            <ViewArticleList repository={articleRepository} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
