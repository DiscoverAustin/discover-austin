import React, { Component } from 'react';
import axios from 'axios';
import Challenge from './Challenge';

export default class Challenges extends Component {
  constructor() {
    super();
    this.state = {
      query: 'all',
      challenges: [],
      achievements: [],
    };
  }

  componentDidMount = () => {
    axios.get('http://localhost:3000/api/getAllAchievements')
      .then((res) => {
        this.setState({ challenges: res.data });
      })
      .catch((e) => { console.log(e); });
    axios.get('http://localhost:3000/api/getUserAchievements')
      .then((res) => {
        this.setState({ achievements: res.data });
      })
      .catch((e) => { console.log(e); });
  }

  handleClick(query) {
    this.setState({ query });
    window.scroll(0, 0);
  }

  filterChallenges = (challenge, index) => {
    if (this.state.query === 'completed') {
      if (this.state.achievements.includes(challenge.description)) {
        return <Challenge challenge={challenge} key={index} />;
      }
      return null;
    } else if (this.state.query === 'todo') {
      if (!this.state.achievements.includes(challenge.description)) {
        return <Challenge challenge={challenge} key={index} />;
      }
      return null;
    }
    if (!this.state.achievements.includes(challenge.description)) {
      return <Challenge challenge={challenge} key={index} />;
    }
    return (
      <div className="challengebox challenge-completed" key={index} >
        <a href={challenge.yelp_url} target="_blank">
          <h3>{challenge.description}</h3>
          <h2>{challenge.points}</h2>
        </a>
      </div>
    );
  }

  render = () => (
    <div className="component-container">
      <h1 className="pagetitle">Challenges</h1>
      <div className="challengescontainer">
        {
          this.state.challenges.map((challenge, index) => (
            this.filterChallenges(challenge, index)
          ))
        }
      </div>
      <footer className="challenges-footer">
        <ul>
          <li onClick={() => this.handleClick('completed')}>Completed</li>
          <li onClick={() => this.handleClick('todo')}>Todo</li>
          <li onClick={() => this.handleClick('all')}>All</li>
        </ul>
      </footer>
    </div>
  );
}
