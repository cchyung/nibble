/**
 * @flow
 */

import App from '../index';
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import MapView from 'react-native-maps';

import Images from '@assets/images';
import ToggleMenuButton from '../common/toggle-menu-button'


// 34.025426, -118.288400
// 34.025106, -118.287435
// 34.023203, -118.291640
// 34.018241, -118.287113
export default class Home extends Component {
  render() {
    return (
      <View style={styles.homeScreen} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ToggleMenuButton navigation={ this.props.navigation }/>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.019984,
            longitude: -118.281233,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
        >
        <MapView.Marker
          coordinate={{
            latitude: 34.023203,
            longitude: -118.291640,
          }}
        />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },

  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});
