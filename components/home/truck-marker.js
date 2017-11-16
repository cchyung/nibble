import App from '../index';
import React, {
  Component,
  PropTypes,
 } from 'react';

 import {
   Dimensions,
   Image,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 import MapView from 'react-native-maps';
 import Images from '@assets/images';

 export default class TruckMarker extends Component {
  static propTypes = {
    // Movie object with title, genre, and poster
    // post: PropTypes.object.isRequired,
    // // Called when user taps on a poster
    // onOpen: PropTypes.func.isRequired,
  }

  render(){
    const {post, post: { latitude, longitude, }, onOpen } = this.props;

    const location = {
      latitude: latitude,
      longitude: longitude
    }

    return(
      <MapView.Marker
        coordinate = { location }
        onPress = { () => onOpen(post) }
        image= { Images.truckMarker }
      >

      </MapView.Marker>
    );
  }
}
