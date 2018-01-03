import React from 'react';
import Nav from './Navbar.js';
import MapPage from './Map.js';

export default class MainPage extends React.Component {

  constructor() {
    super();
    this.state = {
    	showMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
  	this.setState({
  		showMenu: !this.state.showMenu
  	});
  }

  render = () => (
    <div>
      <Nav showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
      <MapPage />
    </div>
  );
};
