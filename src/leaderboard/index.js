import React from 'react';
import axios from 'axios';
import Nav from '../mainPage/Navbar';
import Leaders from './Leaders';


export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      leaders: [],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillMount = () => {
    axios.get('http://localhost:3000/api/leaderboard')
      .then((res) => {
        this.setState({
          leaders: res.data,
        });
      })
      .catch(e => console.log(e));
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render = () => (
    <div>
      <Nav showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
      <h1 className="pagetitle">Leaderboard</h1>
      {this.state.leaders.map((leader, index) => (
        <Leaders leader={leader} index={index} key={index} />
      ))}
    </div>
  )
}

