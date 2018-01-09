import React from 'react';
import Nav from '../mainPage/Navbar';

export default class Challenges extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      challenges: [
        {
          name: 'Hack Reactor',
          points: 75,
          yelp: 'https://www.yelp.com/biz/hack-reactor-austin-austin',
          image: 'https://pbs.twimg.com/media/DQ8wUAgVQAEX8o1.jpg',
        }, {
          name: 'State Capitol',
          points: 25,
          yelp: 'https://www.yelp.com/biz/texas-state-capitol-austin?osq=austin+state+capitol',
          image: 'http://www.trailergypsies.com/_images/042908_1497.jpg',
        }, {
          name: 'Barton Springs',
          points: 40,
          yelp: 'https://www.yelp.com/biz/barton-springs-pool-austin',
          image: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/marquee_large_2x/public/1458762675/barton-springs-pool-austin-aus0316.jpg?itok=iN7LX0OV',
        }, {
          name: 'Lady Bird Lake',
          points: 25,
          yelp: 'https://www.yelp.com/biz/lady-bird-lake-austin',
          image: 'https://www.austintexas.gov/sites/default/files/images/Parks/Parks/Boardwalk_GO_pier.jpg',
        }, {
          name: 'The Driskell',
          points: 30,
          yelp: 'https://www.yelp.com/biz/the-driskill-in-the-unbound-collection-by-hyatt-austin?osq=the+driskell',
          image: 'http://travelskills.com/wp-content/uploads/2016/03/driskill.jpg',
        }, {
          name: 'Nathans Chipotle',
          points: 25,
          yelp: 'https://www.yelp.com/biz/chipotle-mexican-grill-austin-15?osq=Chipotle+Mexican+Grill',
          image: 'https://media1.s-nbcnews.com/j/newscms/2017_29/2076501/170715-chipotle-restaurant-ew-1227p_5fa0d17495b09c2189e8632005bc9e95.nbcnews-ux-2880-1000.jpg',
        },
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
        : <div className="challengebox" key={index} >
        <div className="back"><a href={challenge.yelp} target="_blank"><h3>{challenge.name}</h3><h2>{challenge.points}</h2></a></div>
        <div className="front"><img src={challenge.image} /></div>
        </div>
        ))}
      </div>
    </div>
  );
}
