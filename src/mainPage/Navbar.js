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
        <Link to="/"><div className="option" id="link1">Home</div></Link>
        <Link to="/three"><div className="option">Profile</div></Link>
        <Link to="/leaderboard"><div className="option">Leaderboard</div></Link>
        <Link to="/challenges"><div className="option">Challenges</div></Link>
        <div className="option" id="link3">Logout</div>
      </div> : null}
    </div>
);

export default Nav;
