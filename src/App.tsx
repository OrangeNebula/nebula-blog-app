import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './core/components/Header/Header';
import About from './About/pages/About';
import Articles from './Article/pages/Articles';
import Home from './Home/pages/Home';
import Background from './core/components/Background/Background';

function App() {
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
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
