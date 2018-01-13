import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      weather: {},
    };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleLogout = () => {
    axios.post('/api/logout')
      .then(() => {
        // Forces page reload
        window.location.href = window.location.origin;
      });
  };

  render = () => (
    <div>
      <div className="navbar">
        <div className="iconcontainer" onClick={this.toggleMenu} >
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
        <div className="navtitle">Discover Austin!</div>
      </div>
      {
        this.state.showMenu &&
        <div className="menu">
          <Link to="/" onClick={this.toggleMenu}><div className="option sidebar-home-color" id="link1">Home</div></Link>
          <Link to="/profile" onClick={this.toggleMenu}><div className="option sidebar-profile-color">Profile</div></Link>
          <Link to="/leaderboard" onClick={this.toggleMenu}><div className="option sidebar-leaderboard-color">Leaderboard</div></Link>
          <Link to="/challenges" onClick={this.toggleMenu}><div className="option sidebar-challenges-color">Challenges</div></Link>
          <a href="/" onClick={this.handleLogout}><div className="option sidebar-logout-color" id="link3">Logout</div></a>
        </div>
      }
    </div>
  );
}
