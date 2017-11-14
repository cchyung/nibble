import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
} from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  NavigationActions
 } from 'react-navigation';

 import { Provider } from 'react-redux'
 import { createStore } from 'redux'
 import trollowApp from './reducers/trollowApp'

import Root from './components/root'
import Home from './components/home/home'
import Login from './components/auth/login'
import TruckDetail from './components/detail/truck-detail'

import BackButton from './components/common/back-button'
import ToggleMenuButton from './components/common/toggle-menu-button'

let store = createStore(trollowApp)

class DetailScreen extends Component<{}> {
  static navigationOptions = {
    title: "DetailScreen",
  };

  render() {
    return (
      <Provider store={store}>
        <View style={{
          flex: 1,
          backgroundColor:"#FFA733"
        }}>
          <TruckDetail style={{flex: 1}} navigation={ this.props.navigation }/>
        </View>
      </Provider>
    );
  }
}

class RootScreen extends Component<{}> {
  render() {
    return (
      <Root navigation={this.props.navigation}/>
    );
  }
}

class LoginScreen extends Component<{}> {
  render() {
    return(
      <Login/>
    )
  }
}

class HomeScreen extends Component<{}> {
  static navigationOptions = {
    drawerLabel: 'Home',
    // drawerIcon:
  }

  render() {
    return(
      <Home navigation={this.props.navigation}/>
    );
  }
}

// Set up navigator
// const App = StackNavigator(
//   {
//     Root: {screen: RootScreen},
//     Login: {screen: LoginScreen},
//     TruckDetail: {screen: DetailScreen},
//     Home: {screen: HomeScreen}
//   },
//   {
//     initialRouteName: 'Home',
//     headerMode: 'none',
//   }
// );

const App = DrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Login: {screen: LoginScreen},
    TruckDetail: {screen: DetailScreen},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    drawerWidth: 244,
    contentOptions: {
      activeTintColor: '#ffa733'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default App;
