import React from 'react';
import { AsyncStorage, ReactNative } from 'react-native';

var loggedIn = false;

var ApiUtils = {
  checkStatus: function(response) {
    console.log('checking status');
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      //error message handling here
      console.log('error here in status');
      console.log('response status:' + response.status);
      console.log('response status text: ' + response.statusText);
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

var Authorizer = {
  submitLogin: async function(email, password) {
    try {
      fetch('https://trollow-backend.herokuapp.com/v1/auth/token/create/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          'email': email,
          'password': password
        }),
      })
      .then(ApiUtils.checkStatus)
      .then((response) => response.json())
      .then(async (response) => {
        console.log('login successful');
        console.log(response.auth_token);
        try {
          await AsyncStorage.setItem('auth_token', response.auth_token);
        } catch (error) {
          console.log('error saving data: ' + error);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('error here');
        // login not successful,
        // need to display error message on screen
      })
      .done();
    } catch (Error) {
      console.log('WAS NOT ABLE TO LOGIN');
    }
  },

  submitSignup: function(email, password) {
    Authorizer.submitLogin(email, password);
  }
};

export default Authorizer;
