
import React from 'react';


const Nav = (props) => {
  
  return (
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
        <div className="option" id="link1">Profile</div>
        <div className="option" id="link2">Leaderboard</div>
        <div className="option" id="link3">Logout</div>
      </div> : null}
    </div>
  );
}

export default Nav;