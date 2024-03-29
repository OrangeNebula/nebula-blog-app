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
import Logger from './Core/util/Logger/Logger';

const articleRepository = new ArticleRepositoryMock();
Logger.debug(`Run application in ${process.env.NODE_ENV}.`);

function App() {
  return (
    <div className="App">
      {
        process.env.NODE_ENV === 'production' && (
          <Background />
        )
      }
      <Router>
        <Header
          items={[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Articles', path: '/articles' },
          ]}
        />
        <Switch>
          <Route exact path="/">
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
