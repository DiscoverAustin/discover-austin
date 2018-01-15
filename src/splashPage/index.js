import React, { Component } from 'react';
import SplashContent from './SplashContent';


export default class SplashContainer extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      quotes: [
        {
          name: 'Larry Page',
          text: 'I\'ve never had this much fun in my life!',
        },
        {
          name: 'Bill Gates',
          text: 'I never knew Austin had this much to offer',
        },
        {
          name: 'Elon Musk',
          text: 'Discover Austin motivates me to try new things',
        },
      ],
    };
  }

  componentDidMount() {
    setInterval(this.nextQuote, 5000);
  }

  nextQuote = () => {
    const quotes = this.state.quotes.slice();
    const a = quotes.shift();
    quotes.push(a);
    this.setState({ quotes });
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render = () => (
    <SplashContent
      showMenu={ this.state.showMenu }
      toggleMenu={ this.toggleMenu }
      quotes = { this.state.quotes }
    />
  )
}
