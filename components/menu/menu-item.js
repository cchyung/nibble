import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class MenuItem extends Component {
  render() {
    const { menuItem } = this.props;

    return(
      <View style = { styles.menuItemContainer }>
        <View style = { styles.titleContainer }>
          <Text style = { [styles.h1, styles.title] }>{ menuItem.title }</Text>
          <Text style = { [styles.h1, styles.price] }>${ menuItem.price }</Text>
        </View>
        <Text style = { styles.description }>{ menuItem.description }</Text>
        <Text style = { styles.extra }>{ menuItem.extra }</Text>
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
