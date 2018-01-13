import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './mainPage';
import Leaderboard from './leaderboard';
import Profile from './profile';
import Challenges from './challenges';
import NotFoundPage from './notFoundPage';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Weather from './weather';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path='/' exact={ true } component={ MainPage } />
          <Route path='/leaderboard' component={ Leaderboard } />
          <Route path='/profile' render={() => <Profile user='{}'/>} />
          <Route path='/challenges' component={ Challenges } />
          <Route component={ NotFoundPage } />
        </Switch>
        <Weather />
      </div>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
