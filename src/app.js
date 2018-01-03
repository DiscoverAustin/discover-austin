import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MainPage from './mainPage';
import Leaderboard from './pageTwo';
import Profile from './pageThree';
import NotFoundPage from './notFoundPage';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ MainPage } exact={ true } ></Route>
        <Route path='/two' component={ Leaderboard }></Route>
        <Route path='/three' component={ Profile }></Route>
        <Route component={ NotFoundPage }></Route>
      </Switch>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
