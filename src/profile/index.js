import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }

  componentDidMount = () => {
    const param = window.location.pathname.split('/')[2];
    axios.get('http://localhost:3000/api/getUserInfo', { params: { facebookId: param } })
      .then((res) => {
        this.setState({ user: res.data[0] });
      })
      .catch((e) => { console.log(e); });
  }

   render = () => (
     <div className='component-container'>
       <div className="prof">
         <img className="profImage" src={ this.state.user.picture_url }/>
         <h2> { this.state.user.first_name } { this.state.user.last_name } </h2>
         <h2> <span className="score">{ this.state.user.total_points }</span> points</h2>
       </div>
     </div>
   )
}
