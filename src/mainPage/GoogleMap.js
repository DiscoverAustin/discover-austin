import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAPS_API_KEY } from '../../secrets';

export default class SimpleMap extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 14,
    };
  }

  componentWillMount() {
    const geoSuccess = (position) => {
      console.log('found!');
      this.setState({ center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      } });
      this.renderMarkers(this.state.map, this.state.maps, this.state.center);
    };

    const geoFail = () => {
      console.error('Unable to retrieve user position');
    };

    const geoOptions = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };
    navigator.geolocation.watchPosition(geoSuccess, geoFail, geoOptions);
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
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps, this.state.center)}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    );
  }
}
