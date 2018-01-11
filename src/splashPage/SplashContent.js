import React from 'react';

const SplashContent = props => (
  <div className="splash-main-container">


    <section className="splash-top-bar">
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="iconcontainer" onClick={ props.toggleMenu } >
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
          <div className="navtitle">Discover Austin!</div>
        </div>
        {
          props.showMenu &&
          <div className="menu">
            <div className="option" id="link1">Log in</div>
            <div className="option">Sign up</div>
          </div>
        }
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


    <section className="splash-intro">
      <div>
        <h1>Experience everything Austin has to offer</h1>
        <h2>From famous sites to the best kept secrets in town</h2>
        <h2>25+ challenges to complete</h2>
        <div className="splash-icons-container">
          <img src="http://icons.iconarchive.com/icons/icons-land/points-of-interest/256/Restaurant-Blue-icon.png" />
          <img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-5/1024/MacFamilyTree-icon.png" />
          <img src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/itunes_512.png" />
          <img src="http://www.pvhc.net/img17/pixkriyummsylqerejfp.png" />
          <div className="ut-wrapper"><img src="https://cdn.bleacherreport.net/images/team_logos/328x328/texas_longhorns.png" /></div>
          <img src="http://icons.iconarchive.com/icons/flat-icons.com/flat/512/Beer-icon.png" />
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
      <img src="http://bigreddog.com/wp-content/uploads/2016/03/12_AustinSkylineSunset-1.jpg" />
    </section>


    <section className="splash-quotes">
      <div>
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/19279-200.png" />
        <h3>"{ this.state.quotes[0].text }"</h3>
        <p> - { this.state.quotes[0].name }</p>
      </div>
    </section>


    <section className="splash-team">
      <h1>Meet the team</h1>
      <div className="splash-team-people">
      <div className="splash-team-person">
        <div><img src="https://avatars0.githubusercontent.com/u/5833874?s=400&v=4" /></div>
        <h5>Nathan Chackerian</h5>
      </div>
      <div className="splash-team-person">
        <div><img src="https://avatars2.githubusercontent.com/u/15621096?s=400&v=4" /></div>
        <h5>Kendrick Gardner</h5>
      </div>
      <div className="splash-team-person">
        <div><img src="https://avatars3.githubusercontent.com/u/33075304?s=400&v=4" /></div>
        <h5>Rick Gomez</h5>
      </div>
      <div className="splash-team-person">
        <div><img src="https://avatars2.githubusercontent.com/u/29362180?s=400&v=4" /></div>
        <h5>Edward White</h5>
      </div>
      </div>
    </section>

  </div>
);

export default SplashContent;
