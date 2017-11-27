import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import MenuList from "../menu/menu-list"

export default class MenuCard extends Component {
  render() {
    const { menu } = this.props
    return (
      <View style={ styles.truckCard }>
        <View style={ styles.truckCardDetail }>
          <Text style={ styles.textCenter }>Menu</Text>
          <View style={ styles.divider }></View>
          <View style={ styles.menuContainer }>
            <MenuList menu={ menu }/>
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
    paddingBottom: 10,
    maxHeight: 300,
  }


});
