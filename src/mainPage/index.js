import React from 'react';
import Nav from './Navbar';
import MapPage from './Map';
import Feed from './Feed';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      feed: [
        { name: 'Stephen Hawking', achievement: 'Barton Springs' },
        { name: 'Nathan C', achievement: 'Chipotle' },
        { name: 'Batman', achievement: 'Save Gotham' },
      ],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render = () => (
    <div>
      <Nav showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
      <MapPage />
      <Feed feed={this.state.feed} />
    </div>
  )
}
