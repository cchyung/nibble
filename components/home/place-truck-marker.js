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

 export default class PlaceTruckMarker extends Component {
  static propTypes = {
    
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
