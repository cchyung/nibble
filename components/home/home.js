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


const trucks = [
    {
        "uuid": "0d30cd52-875b-4eb1-815f-358456d81b67",
        "posts": [
            {
                "uuid": "dc6b9155-5a80-4a29-a452-b56d937818ce",
                "truck": "0d30cd52-875b-4eb1-815f-358456d81b67",
                "start_time": "2017-11-12T22:00:00Z",
                "end_time": "2017-11-12T23:00:00Z",
                "latitude": "34.023203",
                "longitude": "-118.291640"
            }
        ],
        "owner": "c5b2abbf-cee3-4e0d-93b0-e80566dc43f7",
        "title": "Kogi",
        "description": "Food truck with BEEF",
        "genre": "Beef",
        "email": "contact@kogi.com",
        "phone": "3332444244"
    },
    {
        "uuid": "58f5f0ff-e8f6-4517-b859-69215df47ce8",
        "posts": [],
        "owner": "58698a83-6c93-41bc-b60b-46ef305a445b",
        "title": "Donny's Muscles on the Cheap",
        "description": "Yummy protein shakes and shit lol",
        "genre": "Healthy Food",
        "email": "contact@kitaoka.com",
        "phone": "3333333334"
    }
]

const posts = [
  {
      "uuid": "dc6b9155-5a80-4a29-a452-b56d937818ce",
      "truck": "0d30cd52-875b-4eb1-815f-358456d81b67",
      "start_time": "2017-11-12T22:00:00Z",
      "end_time": "2017-11-12T23:00:00Z",
      "latitude": 34.023203,
      "longitude": -118.291640
  },
  {
      "uuid": "dc6b9155-5a80-4a29-a452-b56d937818ce",
      "truck": "58f5f0ff-e8f6-4517-b859-69215df47ce8",
      "start_time": "2017-11-12T22:00:00Z",
      "end_time": "2017-11-12T23:00:00Z",
      "latitude": 34.024203,
      "longitude": -118.294640
  },
]

export default class Home extends Component {
  
  // Takes a post object and returns a MapView.Marker with the given coordinates in the post
  _renderPost(post){
    // Generate location object
    const location = {
      latitude: post.latitude,
      longitude: post.longitude
    }
    
    return(
      <MapView.Marker
        coordinate={ location }           
        key={ post.truck }
      />
    );
  }
  
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
            { posts.map((post, index) => this._renderPost(post))}
        </MapView>
        <TruckPopup/>
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
