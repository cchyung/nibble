import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';
import {
  StackNavigator,
  NavigationActions
 } from 'react-navigation';

import Images from '@assets/images';

export default class ToggleMenuButton extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <TouchableOpacity
        onPress={ () => navigate('DrawerToggle') }
        style={styles.menuToggle}
        activeOpacity={0.8}
      >
        <Image style={styles.menuToggleInner} source={Images.hamburger}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menuToggle: {
    position: 'absolute',
    left: 20,
    top: 47,
    zIndex: 4,
  },

  menuToggleInner: {
    height: 17,
    width: 24,
  },
})
