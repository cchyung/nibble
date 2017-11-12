import App from './index';
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class Root extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={ styles.loginScreen }>
        <View style={ styles.buttonGroup }>
          <TouchableOpacity style={[styles.button, styles.signupButton]}>
            <Text style={[styles.buttonText, styles.signupButtonText]}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.divider }></View>
        <Text style={ styles.legalese }>
          By continuing you indicate that you read and
          agree to the <Text style={ styles.boldAndUnderline}>Terms
          and Service</Text> and <Text style={ styles.boldAndUnderline}>Privacy
          Policy</Text>.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: '#ffa733'
  },

  buttonGroup: {
    marginTop: '75%',
  },

  button: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 40,
    marginVertical: 20,
    paddingVertical: 15,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffa733'
  },

  loginButton: {

  },

  signupButton: {
    backgroundColor: '#0033a0',
  },

  signupButtonText: {
    color: 'white',
  },

  divider: {
    alignSelf: 'center',
    height: 0.5,
    backgroundColor: 'white',
    width: '70%',
    marginTop: 80,
  },

  legalese: {
    color: 'white',
    fontSize: 11,
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 15,
    lineHeight: 25,
  },

  boldAndUnderline: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
