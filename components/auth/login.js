/**
 * @flow
 */

import App from '../index';
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Authorizer from '../../actions/Authorizer'

import Images from '@assets/images';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  loginPressed = () => {
    Authorizer.submitLogin(this.state.email, this.state.password);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.loginScreen}>
        <View style={styles.inputContainer}>


          <View style={styles.inputRow}>
            <Image
              style={styles.icon}
              source={Images.emailIcon}
            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({email:text})}
              placeholder={'Email'}
              placeholderTextColor={'#9b9b9b'}
              />
          </View>
          <View style={styles.inputRow}>
            <Image
              style={styles.icon}
              source={Images.passwordIcon}
            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => this.setState({password:text})}
              placeholder={'Password'}
              placeholderTextColor={'#9b9b9b'}
              secureTextEntry={true}
            />
          </View>
          <Button
            title="Real Login"
            color="#841584"
            onPress={this.loginPressed}
            accessibilityLabel=""
            style={{marginVertical: 10}}
          />
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={() => navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center'
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 150,
  },

  input: {
    marginVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#9b9b9b',
    flex: 1,
    fontSize: 16,
    // paddingVertical: 10

  },

  button: {
    paddingHorizontal: 15,
    backgroundColor: '#ffa733',
    borderRadius: 40,
    marginVertical: 20,
    paddingVertical: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },

  loginButton: {
    marginTop: 115,
  },

  inputRow: {
    flexWrap: 'wrap',
    flexDirection:'row',
    height: 70,

  },

  icon: {
    alignSelf: 'center',
    height: 21,
    width: 20,
    marginRight: 20
  }

});
