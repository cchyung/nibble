import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image
} from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  NavigationActions,
  SafeAreaView,
  DrawerItems
 } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware } from 'redux-api-middleware';

import Images from '@assets/images'

import trollowApp from './reducers/trollowApp'

import Root from './components/root'
import Home from './components/home/home'
import HomeMarker from './components/home/home-marker-place'
import Login from './components/auth/login'
import TruckDetail from './components/detail/truck-detail'

import BackButton from './components/common/back-button'
import ToggleMenuButton from './components/common/toggle-menu-button'

let store = createStore(trollowApp, {}, applyMiddleware(apiMiddleware));

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
      <Root navigation={ this.props.navigation }/>
    );
  }
}

class LoginScreen extends Component<{}> {
  render() {
    return(
      <Login navigation={ this.props.navigation }/>
    )
  }
}

class HomeScreen extends Component<{}> {
  render() {
    return(
      <Home navigation={ this.props.navigation }/>
    );
  }
}

class HomeMarkerScreen extends Component<{}> {
  render() {
    return(
      <HomeMarker navigation={ this.props.navigation }/>
    )
  };
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

// Completely custom side menu?
// https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7
const HomeStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    TruckDetail: { screen: TruckDetail }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

// Custom drawer container
// Following https://shift.infinite.red/react-navigation-drawer-tutorial-part-2-9c382217ac6b
const DrawerContainer = (props) => (
  <SafeAreaView style={ styles.drawerContainer }>

    // DrawerItems here
    <DrawerItems { ...props } ></DrawerItems>
    // This view is for the current trucks, positioned on the bottom.
    // figure out a way to get these on this render function?
    <View></View>
  </SafeAreaView>
);

const App = DrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        title: "Home",
        drawerIcon: () => (
          <Image
            source={ Images.homeIcon }
            style={ styles.drawerIcon }
          />
        ),
      }
    },
    PlaceMarker: {
      screen: HomeMarkerScreen,
      navigationOptions: {
        title: "My Truck",
        drawerIcon: () => (
          <Image
            source={ Images.truckIcon }
            style={ styles.drawerIcon }
          />
        ),
      }
    }
  },
  {
    initialRouteName: 'HomeStack',
    headerMode: 'none',
    drawerWidth: 244,
    contentOptions: {
      activeTintColor: '#ffa733',
      labelStyle: {
        fontSize: 18,
        fontWeight: 'normal',
        marginLeft: 0,
      },
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
  },

  drawerContainer: {
    flex: 1,
  },

  drawerIcon: {
    height: 30,
    width: 30,
    resizeMode: 'center'
  },
});

export default App;
