import React from 'react';

const Leaders = props => (
  <section>
    <div>
      <p className="leaders">
        {props.index + 1}. <span className="user">{props.leader.name}</span> <span className="score">{props.leader.points}</span>
      </p>
    </div>
  </section>
);

export default Leaders;
