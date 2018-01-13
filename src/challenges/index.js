import React from 'react';
import axios from 'axios';

export default class Challenges extends React.Component {
  constructor() {
    super();
    this.state = {
      query: 'all',
      challenges: [],
      achievements: [],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
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

  filterChallenges(challenge, index) {
    if (this.state.query === 'completed') {
      if (this.state.achievements.includes(challenge.description)) {
        return (
          <div className="challengebox" key={index} >
            <div className="back">
              <a href={challenge.yelp_url} target="_blank">
                <h3>{challenge.description}</h3>
                <h2>{challenge.points}</h2>
              </a>
            </div>
            <div className="front">
              <img src={challenge.image} />
            </div>
          </div>
        );
      }
      return null;
    } else if (this.state.query === 'todo') {
      if (!this.state.achievements.includes(challenge.description)) {
        return (
          <div className="challengebox" key={index} >
            <div className="back">
              <a href={challenge.yelp_url} target="_blank">
                <h3>{challenge.description}</h3>
                <h2>{challenge.points}</h2>
              </a>
            </div>
            <div className="front">
              <img src={challenge.image} />
            </div>
          </div>
        );
      }
      return null;
    }
    if (!this.state.achievements.includes(challenge.description)) {
      return (
        <div className="challengebox" key={index} >
          <div className="back">
            <a href={challenge.yelp_url} target="_blank">
              <h3>{challenge.description}</h3>
              <h2>{challenge.points}</h2>
            </a>
          </div>
          <div className="front">
            <img src={challenge.image} />
          </div>
        </div>
      );
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

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render = () => (
    <div className="component-container">
      <h1 className="pagetitle">Challenges</h1>
      <div className="challengescontainer">
        {this.state.challenges.map((challenge, index) => (
          this.filterChallenges(challenge, index)
          ))}
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
