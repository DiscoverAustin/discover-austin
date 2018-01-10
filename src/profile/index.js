import React from 'react';
import Nav from '../mainPage/Navbar';

export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      leaders: [],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

 render = () => (
   <div>
     <Nav showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
     <div className="prof">
       <img className="profImage" src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.warstore.co.uk%2Fekmps%2Fshops%2Fmarlina%2Fimages%2Fplain-blue-3-x-2-flag-2482-p.jpg&f=1"/>
       <h2> Nathan Chackerian </h2>
       <h2> <span className="score">2343</span> points</h2>
     </div>
   </div>
 )
}
