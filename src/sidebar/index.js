import React from 'react';
import axios from 'axios';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    axios.post('/api/logout')
      .then(() => {
        // Forces page reload
        window.location.href = window.location.origin;
      });
  }

  render = () => (
      <section className="sidebar-container">
        <ul className="sidebar-nav-menu">
          <li className="sidebar-home-color"><a className="sidebar-home" href="/"><span>Home</span></a></li>
          <li className="sidebar-profile-color"><a className="sidebar-profile" href="/profile"><span>Profile</span></a></li>
          <li className="sidebar-leaderboard-color"><a className="sidebar-leaderboard" href="/leaderboard"><span>Leaderboard</span></a></li>
          <li className="sidebar-challenges-color"><a className="sidebar-challenges" href="/challenges"><span>Challenges</span></a></li>
          <li className="sidebar-logout-color"><a className="sidebar-logout" href="/" onClick={this.handleLogout}><span>Logout</span></a></li>
        </ul>
      </section>
  );
}
