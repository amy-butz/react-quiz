import React from 'react';
import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google} zoom={10}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (AIzaSyC7vqz8C-ZcBFplv9sBlo75CWmId8lS1Ns)
})(MapContainer)


function DominantMap(props) { 
     return
        <p>Your personality is <strong>New York City.</strong> 
        You like to hustle, to be where the action is, to get things done.
        You prefer no nonsense, you are more than comfortable being in charge,
        and pretty much everything you do could be followed with #LikeABoss.</p>

     <Map
          google={this.props.google}
          initialCenter={{
            lat: 40.712245,
            lng: -74.007876
          }}
          zoom={10}
          onClick={this.onMapClicked}
        >
    }
    
//       function initMap() {
//         var uluru = {lat: 40.712245, lng: -74.007876};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 10,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }

//     <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7vqz8C-ZcBFplv9sBlo75CWmId8lS1Ns&callback=initMap">
//     </script> 
// }

function InfluentialMap(props) {
    
}

function SteadyMap(props) {
    
}

function CompliantMap(props) {
    
}

function UndeterminedMap(props) {
    
}

function ResultMap(result) {
    if (result === 'Dominant') {
        return <DominantMap />;
    }

    else if (result === 'Influential') {
        return <InfluentialMap />;
    }

    else if (result === 'Steady') {
        return <SteadyMap />;
    }

    else if (result === 'Compliant') {
        return <CompliantMap />;
    }

    else {
        return <UndeterminedMap />;
    }
}