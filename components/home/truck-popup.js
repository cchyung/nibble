import App from '../index';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

export default class TruckPopup extends Component {
  render(){
    // const { truck } = this.props;
    const truck = {
      "uuid": "58f5f0ff-e8f6-4517-b859-69215df47ce8",
      "posts": [],
      "owner": "58698a83-6c93-41bc-b60b-46ef305a445b",
      "title": "Donny's Muscles on the Cheap",
      "description": "Yummy protein shakes and shit lol",
      "genre": "Healthy Food",
      "email": "contact@kitaoka.com",
      "phone": "3333333334"
    }
    
    return (
      <View style={ styles.truckPopup }>
        <View style={styles.truckProfilePic}>
        </View>
        <View style={styles.likeButton}>
        </View>
        <View style={ styles.truckCardDetail }>
          <View style={styles.truckInformation}>
            <Text style={ [styles.textCenter, styles.header] }>{ truck.title }</Text>
            <Text style={ styles.textCenter }>{ truck.genre }</Text>
            <Text style={ styles.textCenter }>{ truck.averageRating }</Text>
            <Text style={ styles.textCenter }>{ truck.address }</Text>
          </View>
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreButtonText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  truckPopup: {
    marginTop: 25,
    marginBottom: 5,
    alignSelf: 'center',
    width: '85%',
    position:'absolute',
    bottom: -5
    
  },

  truckProfilePic: {
    position: 'absolute',
    height: 125,
    width: 125,
    backgroundColor: '#aaaaaa',
    alignSelf: 'center',
    zIndex: 3,
    borderRadius: 100,
  },

  likeButton: {
    position: 'absolute',
    width: 65,
    height: 65,
    right: 20,
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: '#aaaaaa',
    zIndex: 3,
  },

  truckCardDetail: {
    alignSelf: 'stretch',
    marginTop: 65,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 20,
  },

  truckInformation: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 75,
    borderRadius: 5,
    paddingHorizontal: 20,
  },

  followers: {
      backgroundColor: '#4245f4', // temp
      borderRadius: 40,
      marginTop: 8,
  },

  followersText: {
      color: 'white',
      marginVertical: 10,
      marginHorizontal: 35,
      fontSize: 18,
  },

  textCenter: {
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 18,
  },

  header: {
    fontSize: 28,
  },
  
  seeMoreButton: {
    backgroundColor: '#ffa61f',
    borderRadius: 20,
    alignSelf: 'center',
    width: '30%',
    marginBottom: 20
  },
  
  seeMoreButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 5      
  }
});