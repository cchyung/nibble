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
import TruckMarker from './truck-marker'

import {
  posts,
  trucks
} from '@data/data'

export default class Home extends Component {
  state = {
    popupIsOpen: false,
  }

  // Helper function to get truck data by id
  getTruckByUUID = (uuid) => {
    for(var i = 0; i < trucks.length; i++){
      if(trucks[i].uuid == uuid){
        return trucks[i];
      }
    }
  }

  openTruckPopup = (post) => {
    truck = this.getTruckByUUID(post.truck) // Get truck object to set to state
    this.setState({
      popupIsOpen: true,
      post,
      truck,
    });
  }

  closeTruckPopup = () => {
    this.setState({
      popupIsOpen: false,
    });
  }

  onSeeMore = () => {
    this.props.navigation.navigate('TruckDetail', { truck: this.state.truck }) // Navigate to next screen
  }

  // Takes a post object and returns a TruckMarker with the given coordinates in the post
  _renderPost(post, key){
    return(
      <TruckMarker post={ post } key={ key } onOpen = { this.openTruckPopup }/>
    );
  }

  render() {
    return (
      <View style={ styles.homeScreen } style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ToggleMenuButton navigation={ this.props.navigation }/>
        <MapView
          style={styles.map}
          showsUserLocation={ true }
          showsMyLocationButton={ true }
          initialRegion={{
            latitude: 34.021447,
            longitude: -118.286984,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
        >
            { posts.map((post, index) => this._renderPost(post, index)) }
        </MapView>
        <TruckPopup/>

        <TruckPopup
          post={ this.state.post }
          truck={ this.state.truck }
          isOpen={ this.state.popupIsOpen }
          onClose={ this.closeTruckPopup }
          onSeeMore={ this.onSeeMore }
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
