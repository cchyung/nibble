import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  List
} from 'react-native';

import MenuItem from './menu-item'

export default class MenuList extends Component {
  render() {

    const { menu } = this.props;
    return(
      <FlatList
        data={ menu }
        renderItem={({ item }) =>
          (
            <MenuItem menuItem={ item }/>
          )
        }
        keyExtractor={ item => item.title }
      />
    )
  }
}
