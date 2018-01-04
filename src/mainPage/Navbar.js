import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
    <div>
      <div className="navbar">
        <div className="iconcontainer" onClick={props.toggleMenu} >
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
        <div className="title">Discover Austin!</div>
      </div>
      {props.showMenu ?
      <div className="menu">
        <Link to="/three"><div className="option" id="link1">Profile</div></Link>
        <Link to="/two"><div className="option" id="link2">Leaderboard</div></Link>
        <div className="option" id="link3">Logout</div>
      </div> : null}
    </div>
);

export default Nav;
