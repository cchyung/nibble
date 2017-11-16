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
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 0}}>
            <BackButton navigation={ navigation }/>
            <View style={ styles.detailContent }>
              <TruckCard/>
              <AboutCard/>
              <MenuCard/>
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
