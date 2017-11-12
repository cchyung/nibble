import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TruckCard extends Component {
  render() {
    const truck = {
      title: "The Best Fucking Taco Truck You'll Ever Eat At",
      genre: "Mexican",
      followers: 400
    };
    return (
      <View style={ styles.truckCard }>
        <View style={styles.truckProfilePic}>
        </View>
        <View style={styles.likeButton}>
        </View>
        <View style={ styles.truckCardDetail }>
          <View style={styles.truckInformation}>
            <Text style={ [styles.textCenter, styles.header] }>{ truck.title }</Text>
            <Text style={ styles.textCenter }>{ truck.genre }</Text>
            <View style={styles.followers}>
              <Text style={styles.followersText}>{truck.followers} Followers</Text>
            </View>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  truckCard: {
    marginTop: 25,
    marginBottom: 5,
    alignSelf: 'center',
    width: '100%',
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
    borderRadius: 5,
    paddingBottom: 20,
    // TODO: Figure out cross platform shadows
    // shadowColor: '#5b5b5b',
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 1,
    // shadowRadius: 4,
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
  }
});
