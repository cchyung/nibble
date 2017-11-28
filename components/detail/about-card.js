import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Images from '@assets/images'

export default class AboutCard extends Component {
  render() {
    const { description } = this.props
    return (
      <View style={ styles.truckCard }>
        <View style={ styles.truckCardDetail }>
          <View style={styles.truckInformation}>
            <Image source={ Images.truckIconBlue } style={ styles.truckIcon }/>
            <Text style={ [styles.textCenter, styles.header] }>About Us</Text>
            <Text style={ styles.textCenter }>{ description }</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  truckCard: {
    marginVertical: 5,
    alignSelf: 'center',
    width: '100%',
  },

  truckCardDetail: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },

  truckInformation: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 5,
    // TODO: Figure out cross platform shadows
    // shadowColor: '#5b5b5b',
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 1,
    // shadowRadius: 4,
  },

  textCenter: {
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 14
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  truckIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});
