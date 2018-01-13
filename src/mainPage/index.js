import React from 'react';
import axios from 'axios';
import MapPage from './Map';
import Feed from './Feed';


export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { feed: [] };
  }

  componentWillMount = () => {
    axios.get('http://localhost:3000/api/feed')
      .then((res) => {
        this.setState({ feed: res.data });
      })
      .catch((e) => { console.log(e); });
  }

  render = () => (
    <div className="component-container">
      <MapPage />
      <Feed feed={this.state.feed} />
    </div>
  )
}
