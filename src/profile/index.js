import React, { Component } from 'react';
import axios from 'axios';
import Feed from '../mainPage/Feed';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      userFeed: [],
    };
  }

  componentDidMount = () => {
    const param = window.location.pathname.split('/')[2];
    axios.get('/api/getUserInfo', { params: { facebookId: param } })
      .then((res) => {
        this.setState({ user: res.data[0] });
      })
      .catch((e) => { console.log(e); });
    axios.get('/api/getUserFeed', { params: { facebookId: param } })
      .then((res) => {
        this.setState({ userFeed: res.data });
      })
      .catch((e) => { console.log(e); });
  }

   render = () => (
     <div className='component-container'>
       <div className="prof">
         <img className="profImage" src={ this.state.user.picture_url }/>
         <h2> { this.state.user.first_name } { this.state.user.last_name } </h2>
         <h2> <span className="score">{ this.state.user.total_points }</span> points </h2>
       </div>
      <Feed feed={ this.state.userFeed } />
     </div>
   )
}
