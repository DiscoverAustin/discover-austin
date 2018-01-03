import React from 'react';
import Nav from './Navbar.js';
import MapPage from './Map.js';

export default class MainPage extends React.Component {

  constructor() {
    super();
  }

  render = () => (
    <div>
      <Nav />
      <MapPage />
    </div>
  );
};
