import React from 'react';

export default class Splash extends React.Component {
  constructor() {
    super();
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render = () => (
  <div className="splash-main-container">
    <section className="splash-top-bar">

      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="iconcontainer" onClick={this.toggleMenu} >
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
          <div className="navtitle">Discover Austin!</div>
        </div>
        {this.state.showMenu ?
        <div className="menu">
          <div className="option" id="link1">Log in</div>
          <div className="option">Sign up</div>
        </div> : null}
      </div>


      <div className="splash-top-bar-title">Discover Austin!</div>
      <ul>
        <a href="/auth/facebook"><li>Log in</li></a>
        <a href="/auth/facebook"><li>Sign up</li></a>
      </ul>
    </section>
    <section className="splash-banner">
      <img src="http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/10/People-and-dogs-with-a-view-of-Austin-Texas-downtown-skyline.jpg" />
      <div>
        <h1>Hello Austin</h1>
        <h2>Get ready for adventure</h2>
        <a href="/auth/facebook">GET STARTED - IT'S FREE</a>
      </div>
    </section>
  </div>
  )
}
