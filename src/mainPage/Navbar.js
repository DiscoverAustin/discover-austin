
import React from 'react';


const Nav = (props) => {
  
  return (
	<div className="navbar">
      <div className="iconcontainer" onClick={props.toggleMenu} >
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
      <div className="title">Discover Austin!</div>
    </div>
  );
}

export default Nav;