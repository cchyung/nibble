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

import moment from 'moment'

import DateTimePicker from 'react-native-modal-datetime-picker'

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
    isDateTimePickerVisible: false,
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

  onSaveButtonPressed = (date) => {
    console.log(moment());
    let post = {
      "uuid": "0",
      "truck": "1",
      "start_time": moment(),
      "end_time": date,
      "latitude": this.state.region.latitude,
      "longitude": this.state.region.longitude
    };
    
  }

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.onSaveButtonPressed(date);
    this._hideDateTimePicker();
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
          onPress={this._showDateTimePicker}
          title="Mark truck location"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <DateTimePicker
          mode="time"
          minimumDate={moment().toDate()}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
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
