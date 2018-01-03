import React from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';

export default class MapPage extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url={stamenTonerTiles}
        />
      </Map>
    );
  }
}
