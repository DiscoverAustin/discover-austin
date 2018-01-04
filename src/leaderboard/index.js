import React from 'react';
import Nav from '../mainPage/Navbar';
import Leaders from './Leaders';


export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      leaders: [
        { name: 'Mario', points: 1250 },
        { name: 'Luigi', points: 975 },
        { name: 'Princess Peach', points: 825 },
        { name: 'Yoshi', points: 600 },
        { name: 'Bowser', points: 400 },
        { name: 'Wario', points: 250 },
      ],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render = () => (
    <div>
      <Nav showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
      <h1 className="leaderboardTitle">Leaderboard</h1>
      {this.state.leaders.map((leader, index) => (
        <Leaders leader={leader} index={index} />
      ))}
    </div>
  )
}

