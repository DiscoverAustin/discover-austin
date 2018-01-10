import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './mainPage';
import Leaderboard from './leaderboard';
import Profile from './profile';
import Challenges from './challenges';
import Splash from './splashPage';
import NotFoundPage from './notFoundPage';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={ true } component={ MainPage } />
        <Route path='/leaderboard' component={ Leaderboard } />
        <Route path='/profile' component={ Profile } />
        <Route path='/challenges' component={ Challenges } />
        <Route path='/login' component={ Splash } />
        <Route component={ NotFoundPage } />
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
