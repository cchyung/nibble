import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MenuCard extends Component {
  render() {
    const { truck } = this.props
    return (
      <View style={ styles.truckCard }>
        <View style={ styles.truckCardDetail }>
          <Text style={ styles.textCenter }>Menu</Text>
          <View style={ styles.divider }></View>
          <View style={ styles.menuContainer }></View>
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

  textCenter: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 18,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  menuContainer: {
    height: 250, // temp
  }


});
