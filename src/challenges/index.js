import React from 'react';
import Nav from '../mainPage/Navbar';

export default class Challenges extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      challenges: [
        { name: 'Hack Reactor', points: 75 },
        { name: 'State Capitol', points: 25 },
        { name: 'Barton Springs', points: 40 },
        { name: 'Lady Bird Lake', points: 25 },
        { name: 'The Driskell', points: 30 },
        { name: '6th Street', points: 25 },
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
      <h1 className="pagetitle">Challenges</h1>
      <div className="challengescontainer">
        {this.state.challenges.map((challenge, index) => (
        <div className="challengebox" key={index} ><a href={challenge.url} ><h3>{challenge.name}</h3><h2>{challenge.points}</h2></a></div>))}
      </div>
    </div>
  );
}
