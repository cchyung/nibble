import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class MenuItem extends Component {
  _renderDescription(description) {
    if(description != null){
      return (
        <Text style = { styles.description }>{ description }</Text>
      );
    } else {
      return null; // Return nothing
    }
  }

  _renderExtra(extra) {
    if(extra != null){
      return (
        <Text style = { styles.extra }>{ extra }</Text>
      );
    } else {
      return null; // Return nothing
    }
  }

  render() {
    const { menuItem } = this.props;

    return(
      <View style = { styles.menuItemContainer }>
        <View style = { styles.titleContainer }>
          <Text style = { [styles.h1, styles.title] }>{ menuItem.title }</Text>
          <Text style = { [styles.h1, styles.price] }>${ menuItem.price }</Text>
        </View>
        { this._renderDescription( menuItem.description ) }
        { this._renderExtra( menuItem.extra ) }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  menuItemContainer: {
    marginHorizontal: 20,
    marginVertical: 5
  },

  h1: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  titleContainer: {
    flexDirection: 'row',
    marginVertical: 5
  },

  title: {
    flex: 3,
  },

  price: {
    flex: 1,
    right: 0,
    position: 'relative',
    textAlign: 'right'
  },

  description: {
    marginVertical: 2,
    fontSize: 12
  },

  extra: {
    marginVertical: 2,
    fontSize: 12,
    color: 'grey',
    fontStyle: 'italic'
  }
});
