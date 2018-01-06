import React from 'react';
import Nav from '../mainPage/Navbar';

export default class Challenges extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      challenges: [
        { name: 'Hack Reactor', points: 75, yelp: 'https://www.yelp.com/biz/hack-reactor-austin-austin' },
        { name: 'State Capitol', points: 25, yelp: 'https://www.yelp.com/biz/texas-state-capitol-austin?osq=austin+state+capitol' },
        { name: 'Barton Springs', points: 40, yelp: 'https://www.yelp.com/biz/barton-springs-pool-austin' },
        { name: 'Lady Bird Lake', points: 25, yelp: 'https://www.yelp.com/biz/lady-bird-lake-austin' },
        { name: 'The Driskell', points: 30, yelp: 'https://www.yelp.com/biz/the-driskill-in-the-unbound-collection-by-hyatt-austin?osq=the+driskell' },
        { name: 'Nathans Chipotle', points: 25, yelp: 'https://www.yelp.com/biz/chipotle-mexican-grill-austin-15?osq=Chipotle+Mexican+Grill' },
      ],
      user: { name: 'Edward', points: 850, achievements: ['State Capitol', 'Hack Reactor', 'The Driskell'] },
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
          this.state.user.achievements.includes(challenge.name) ?
        <div className="challengebox challenge-completed" key={index} ><a href={challenge.yelp} target="_blank"><h3>{challenge.name}</h3><h2>{challenge.points}</h2></a></div>
        : <div className="challengebox" key={index} ><a href={challenge.yelp} target="_blank"><h3>{challenge.name}</h3><h2>{challenge.points}</h2></a></div>
        ))}
      </div>
    </div>
  );
}
