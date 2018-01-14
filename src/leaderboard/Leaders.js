import React from 'react';
import { Link } from 'react-router-dom';

const Leaders = props => (
  <section>
    <div>
      <p className="leaders">
        {props.index + 1}.
        <Link to={`/profile/${props.leader.facebook_id}`}>
          <span className="user" > { props.leader.first_name } {props.leader.last_name} </span>
        </Link>
        <span className="score"> { props.leader.total_points }</span>
      </p>
    </div>
  </section>
);

export default Leaders;
