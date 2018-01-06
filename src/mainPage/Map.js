import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png';

export default class MapPage extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 30.265981,
      lng: -97.747224,
      zoom: 15,
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
