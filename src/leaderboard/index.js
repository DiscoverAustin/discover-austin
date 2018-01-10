import React from 'react';
import axios from 'axios';
import Leaders from './Leaders';

export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = { leaders: [] };
  }

  componentWillMount = () => {
    axios.get('http://localhost:3000/api/leaderboard')
      .then((res) => {
        this.setState({ leaders: res.data });
      })
      .catch((e) => { console.log(e); });
  }

  render = () => (
    <div>
      <h1 className="pagetitle">Leaderboard</h1>
      {this.state.leaders.map((leader, index) => (
        <Leaders leader={leader} index={index} key={index} />
      ))}
    </div>
  )
}
