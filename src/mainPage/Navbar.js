import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Nav = (props) => {
  const logout = () => {
    axios.post('/api/logout')
      .then(() => {
        // Forces page reload
        window.location.href = window.location.origin;
      });
  };

  return (
    <div>
      <div className="navbar">
        <div className="iconcontainer" onClick={props.toggleMenu} >
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
        <div className="navtitle">Discover Austin!</div>
      </div>
      {
        props.showMenu &&
        <div className="menu">
          <Link to="/"><div className="option" id="link1">Home</div></Link>
          <Link to="/profile"><div className="option">Profile</div></Link>
          <Link to="/leaderboard"><div className="option">Leaderboard</div></Link>
          <Link to="/challenges"><div className="option">Challenges</div></Link>
          <a href="/" onClick={logout}><div className="option" id="link3">Logout</div></a>
        </div>
      }
    </div>
  );
};

export default Nav;
