import React from 'react';

const Challenge = props => (
  <div className="challengebox" >
    <div className="back">
      <a href={props.challenge.yelp_url} target="_blank">
        <h3>{props.challenge.description}</h3>
        <h2>{props.challenge.points}</h2>
      </a>
    </div>
    <div className="front">
      <img src={props.challenge.image} />
    </div>
  </div>
);

export default Challenge;
