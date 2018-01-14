import React, { Component } from 'react';
import axios from 'axios';
import Leaders from './Leaders';

export default class Leaderboard extends Component {
  constructor() {
    super();
    this.state = { leaders: [] };
  }

  componentWillMount = () => {
    axios.get('/api/leaderboard')
      .then((res) => {
        this.setState({ leaders: res.data });
      })
      .catch((e) => { console.error(e); });
  }

  render = () => (
    <div className="component-container">
      <div className="leaderboard-wrapper">
        <h1 className="pagetitle">Leaderboard</h1>
        {this.state.leaders.map((leader, index) => (
          <Leaders leader={leader} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
