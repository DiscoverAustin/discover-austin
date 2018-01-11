import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { showMenu: false };
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
          <Link to="/"><div className="option" id="link1">Home</div></Link>
          <Link to="/profile"><div className="option">Profile</div></Link>
          <Link to="/leaderboard"><div className="option">Leaderboard</div></Link>
          <Link to="/challenges"><div className="option">Challenges</div></Link>
          <a href="/" onClick={ this.handleLogout }><div className="option" id="link3">Logout</div></a>
        </div>
      }
    </div>
  );
}
