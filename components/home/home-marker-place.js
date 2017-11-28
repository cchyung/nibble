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

import MapView from 'react-native-maps'

import Images from '@assets/images'
import ToggleMenuButton from '../common/toggle-menu-button'
import TruckPopup from './truck-popup'
import PlaceTruckMarker from './place-truck-marker'
import TruckMarker from './truck-marker'

import {
  posts,
  trucks
} from '@data/data'

export default class Home extends Component {
  state = {
    popupIsOpen: false,
    region: undefined,
  }

  // Helper function to get truck data by id
  getTruckByUUID = (uuid) => {
    for(var i = 0; i < trucks.length; i++){
      if(trucks[i].uuid == uuid){
        return trucks[i];
      }
    }
  }

  onRegionChange(region) {
    this.state.region = region;
  }

  onSaveButtonPressed = () => {
    
  }

  render() {
    return (
      <View style={ styles.homeScreen } style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ToggleMenuButton navigation={ this.props.navigation }/>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.019984,
            longitude: -118.281233,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
          onRegionChange={(region) => this.onRegionChange(region)}
        />
        <Image
          source={Images.truckMarker}
        />
        <Button
          onPress={this.onSaveButtonPressed}
          title="Mark truck location"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
