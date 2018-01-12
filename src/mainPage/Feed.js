import React from 'react';
import { Link } from 'react-router-dom';

const Feed = props => (
  <section className="feed">
  {props.feed.map((person, index) => (
    <div className="feeditem" key={index} >
      <p>
        <Link to={`/profile/${person.facebook_id}`}>
          <span className="user">{person.first_name} {person.last_name}</span>
        </Link> has unlocked the
        <span className="achievement"><a href={person.yelp_url} target="_blank"> {person.description}</a></span> achievement
      </p>
    </div>
  ))}
  </section>
);

export default Feed;
