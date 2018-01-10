import React from 'react';
import MapPage from './Map';
import Feed from './Feed';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { feed: [
      {
        name: 'Stephen Hawking',
        achievement: 'Barton Springs',
        yelp: 'https://www.yelp.com/biz/barton-springs-pool-austin',
      },
      {
        name: 'Nathan C',
        achievement: 'Chipotle',
        yelp: 'https://www.yelp.com/biz/chipotle-mexican-grill-austin-15?osq=Chipotle+Mexican+Grill',
      },
      {
        name: 'Batman',
        achievement: 'State Capitol',
        yelp: 'https://www.yelp.com/biz/hack-reactor-austin-austin',
      },
    ] };
  }

  render = () => (
    <div>
      <MapPage />
      <Feed feed={this.state.feed} />
    </div>
  )
}
