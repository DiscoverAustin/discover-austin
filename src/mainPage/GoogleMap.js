import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY as apiKey } from '../../secrets';

export class MapContainer extends React.Component {
  render = () => (

  )
}

export default GoogleApiWrapper({ apiKey })(MapContainer);
