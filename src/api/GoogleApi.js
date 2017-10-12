import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class MapContainer extends React.Component {
render() {
    return (
      <Map google={this.props.google} initialCenter={this.props.initialCenter} zoom={10} />
    );
  }
}
 

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC7vqz8C-ZcBFplv9sBlo75CWmId8lS1Ns')
})(MapContainer)

