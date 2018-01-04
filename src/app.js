import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './mainPage';
import Leaderboard from './leaderboard';
import Profile from './pageThree';
import Challenges from './challenges';
import NotFoundPage from './notFoundPage';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ MainPage } exact={ true } ></Route>
        <Route path='/leaderboard' component={ Leaderboard }></Route>
        <Route path='/three' component={ Profile }></Route>
        <Route path='/challenges' component={ Challenges }></Route>
        <Route component={ NotFoundPage }></Route>
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
