import React from 'react';
import { Link } from 'react-router-dom';

const Leaders = props => (
  <section>
    <div>
      <p className="leaders">
        { props.index + 1 }.
        <Link to={`/profile/${props.leader.name}`}>
          <span className="user">{ props.leader.name }</span>
        </Link>
        <span className="score">{ props.leader.score }</span>
      </p>
    </div>
  </section>
);

export default Leaders;
