import React from 'react';
import Nathan from '../../dist/img/Nathan.jpg';
import Kendrick from '../../dist/img/Kendrick.jpg';
import Rick from '../../dist/img/Rick.jpg';
import Edward from '../../dist/img/Edward.jpg';
import Austin from '../../dist/img/Austin.jpg';
import Austin2 from '../../dist/img/Austin2.jpg';
import FoodIcon from '../../dist/img/FoodIcon.png';
import NatureIcon from '../../dist/img/NatureIcon.png';
import MusicIcon from '../../dist/img/MusicIcon.png';
import BuildingsIcon from '../../dist/img/BuildingsIcon.png';
import UTIcon from '../../dist/img/UTIcon.png';
import BeerIcon from '../../dist/img/BeerIcon.png';
import Quotes from '../../dist/img/Quotes.png';

const SplashContent = props => (
  <div className="splash-main-container">

    <section className="splash-top-bar">
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="iconcontainer" onClick={props.toggleMenu} >
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
          <div className="navtitle">Discover Austin!</div>
        </div>
        {props.showMenu ?
        <div className="menu">
          <a href="/auth/facebook"><div className="option" id="link1">Log in</div></a>
          <a href="/auth/facebook"><div className="option">Sign up</div></a>
        </div> : null}
      </div>
      <div className="splash-top-bar-title">Discover Austin!</div>
      <ul>
        <a href="/auth/facebook"><li>Log in</li></a>
        <a href="/auth/facebook"><li>Sign up</li></a>
      </ul>
    </section>

    <section className="splash-banner">
      <img src={Austin} />
      <div>
        <h1>Hello Austin</h1>
        <h2>Get ready for adventure</h2>
        <a href="/auth/facebook">GET STARTED - IT'S FREE</a>
      </div>
    </section>

    <section className="splash-intro">
      <div>
        <h1>Experience everything Austin has to offer</h1>
        <h2>From famous sites to the best kept secrets in town</h2>
        <h2>25+ challenges to complete</h2>
        <div className="splash-icons-container">
          <img src={FoodIcon} />
          <img src={NatureIcon} />
          <img src={MusicIcon} />
          <img src={BuildingsIcon} />
          <div className="ut-wrapper"><img src={UTIcon} /></div>
          <img src={BeerIcon} />
        </div>
      </div>
    </section>

    <section className="splash-rules">
      <div className="splash-instructions-wrapper">
        <div>
          <h1>How does it work?</h1>
          <h3> - Visit a location to earn a challenge badge</h3>
          <h3> - Earning a challenge badge gives you points</h3>
          <h3> - Climb the leaderboard</h3>
          <h3> - Conquer Austin</h3>
        </div>
      </div>
      <img src={Austin2} />
    </section>

    <section className="splash-quotes">
      <div>
        <img src={Quotes} />
        <h3>"{ props.quotes[0].text }"</h3>
        <p>- { props.quotes[0].name }</p>
      </div>
    </section>

    <section className="splash-team">
      <h1>Meet the team</h1>
      <div className="splash-team-people">
      <div className="splash-team-person">
        <div><img src={Nathan} /></div>
        <h5>Nathan Chackerian</h5>
      </div>
      <div className="splash-team-person">
        <div><img src={Kendrick} /></div>
        <h5>Kendrick Gardner</h5>
      </div>
      <div className="splash-team-person">
        <div><img src={Rick} /></div>
        <h5>Rick Gomez</h5>
      </div>
      <div className="splash-team-person">
        <div><img src={Edward} /></div>
        <h5>Edward White</h5>
      </div>
      </div>
    </section>
  </div>
);

export default SplashContent;
