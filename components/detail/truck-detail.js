import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import TruckCard from './truck-card'
import AboutCard from './about-card'
import MenuCard from './menu-card'
import BackButton from '../common/back-button'

// Truck detail screen
export default class TruckDetail extends Component {
  render() {
    const { navigation } = this.props
    const { truck } = this.props.navigation.state.params
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 0}}>
            <BackButton navigation={ navigation }/>
            <View style={ styles.detailContent }>
              <TruckCard truck = { truck }/>
              <AboutCard description = { truck.description }/>
              <MenuCard menu = { truck.menu }/>
            </View>
        </ScrollView>
    );
  }
}

styles = StyleSheet.create({
  detailContent: {
    marginTop: 20,
    marginBottom: 5,
    flex: 1,
    paddingHorizontal: 10,
  }
})
