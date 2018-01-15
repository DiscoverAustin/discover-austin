
import React, { Component } from 'react';
import axios from 'axios';
// import MapPage from './Map';
import Feed from './Feed';
// import GoogleMap from './GoogleMap';


export default class MainPage extends Component {
  constructor() {
    super();
    this.state = { feed: [] };
  }

  componentWillMount = () => {
    axios.get('/api/feed')
      .then((res) => {
        this.setState({ feed: res.data });
      })
      .catch((e) => { console.log(e); });
  }

  render = () => (
    <div className="component-container">
      <Feed feed={ this.state.feed } />
    </div>
  )
}


// <GoogleMap isMarkerShown/>
// <MapPage />
