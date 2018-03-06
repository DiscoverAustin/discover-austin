import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import _ from 'lodash';
import { GOOGLE_MAPS_API_KEY } from '../../secrets';
import ChallengeIcon from '../../dist/img/challenge_icon.png';
import AchievementIcon from '../../dist/img/achievement_icon.png';

const Challenge = props => <div><img src={ChallengeIcon} height="30" width="30" alt="achievement icon" title={props.info.description}/></div>;
const Achievement = props => <div><img src={AchievementIcon} height="30" width="30" alt="achievement icon" title={props.info.description}/></div>;

export default class GoogleMap extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 30.2672,
        lng: -97.7431,
      },
      zoom: 14,
      challenges: [],
      achievements: [],
      locationFound: false,
    };
  }

  componentWillMount() {
    axios.get('/api/getAllAchievements')
      .then(({ data: challenges }) => {
        this.setState({ challenges });
      })
      .catch((e) => { console.error(e); });

    const geoSuccess = (position) => {
      console.log('position: ', position);
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        locationFound: true,
      });
      this.renderMarkers(this.state.map, this.state.maps, this.state.center);

    };

    const geoSuccessDebounced = _.debounce(geoSuccess, 5000);

    const geoFail = () => {
      console.error('Unable to retrieve user position');
    };

    const geoOptions = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };
    navigator.geolocation.watchPosition(geoSuccessDebounced, geoFail, geoOptions);
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.challenges.forEach((challenge) => {
      if (this.calcDistance(this.state.center, challenge) <= 100
      && prevState.center !== this.state.center) {
        alert(`Congrats! You have successfully completed the ${challenge.description} challenge`); // eslint-disable-line
        console.log(`distance from achievement: ${Math.round(this.calcDistance(this.state.center, challenge))}ft`);
        this.setState({ achievements: [...this.state.achievements, challenge] });
        axios.post('/api/updateUserAchievements', { achievement: challenge.id })
          .then((res) => { console.log('res: ', res); })
          .catch((e) => { console.log(e); });
      }
    });
  }

  renderMarkers = (map, maps, position) => {
    this.state.map = this.state.map || map;
    this.state.maps = this.state.maps || maps;
    const YouAreHere = new maps.Marker({ // eslint-disable-line
      position,
      map,
      title: 'You are here',
    });
  }

  calcDistance = (user, challenge) => {
    const { lat: lat1, lng: lng1 } = user;
    const { latitude: lat2, longitude: lng2 } = challenge;
    const R = 6371.008; // Radius of the earth in km
    const deg2rad = deg => deg * (Math.PI / 180);
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 + lng1);
    const a =
      (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
      (Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2));
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 3280.84; // Distance in ft
    return distance;
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={14}
        center={this.state.center}
        bootstrapURLKeys={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        onGoogleApiLoaded={({ map, maps }) => this.setState({
          map,
          maps,
        })}
        yesIWantToUseGoogleMapApiInternals
      >
      {
        this.state.challenges.map(challenge => (
          <Challenge
            lat={challenge.latitude}
            lng={-challenge.longitude}
            info={challenge}
            key={challenge.id}
          />
        ))
      }
      {
        this.state.achievements.map(achievement => (
          <Achievement
            lat={achievement.latitude}
            lng={-achievement.longitude}
            info={achievement}
            key={achievement.id}
          />
        ))
      }

      </GoogleMapReact>
    );
  }
}
