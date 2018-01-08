import React from 'react';

const Splash = () => (
  <div className="splash-main-container">
    <section className="splash-top-bar">
      <div className="splash-top-bar-title">Discover Austin!</div>
      <ul>
        <li>Log in</li>
        <li>Sign up</li>
      </ul>
    </section>
    <section className="splash-banner">
      <img src="http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/10/People-and-dogs-with-a-view-of-Austin-Texas-downtown-skyline.jpg" />
      <div>
        <h1>Hello Austin</h1>
        <h2>Get ready for adventure</h2>
        <a href="/login">GET STARTED - IT'S FREE</a>
      </div>
    </section>
  </div>
);

export default Splash;
