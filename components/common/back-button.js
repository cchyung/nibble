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


export default class BackButton extends Component {
  render() {
    const {goBack} = this.props.navigation;
    console.log("Rendering back button");
    return(
      <TouchableOpacity
        onPress={ () => goBack() }
        style={ styles.backButton }
        activeOpacity={0.8}
      >
        <Image style={styles.backButtonInner} source={ Images.backButton }/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 10,
    top: 40,
    zIndex: 4,
  },

  backButtonInner: {
    height: 35,
    width: 45,
    resizeMode: 'contain'
  },
})
