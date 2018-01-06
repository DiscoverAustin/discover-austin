import React from 'react';
import { Link } from 'react-router-dom';

const Feed = props => (
  <section className="feed">
  {props.feed.map((person, index) => (
    <div className="feeditem" key={index} >
      <p>
        <Link to={`/profile/${person.name}`}>
          <span className="user">{person.name}</span>
        </Link> has unlocked the
        <span className="achievement"><a href={person.yelp} target="_blank"> {person.achievement}</a></span> achievement
      </p>
    </div>
  ))}
  </section>
);

export default Feed;
