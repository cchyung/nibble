import App from '../index';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class TruckPopup extends Component {
  state = {
    position: new Animated.Value(this.props.isOpen ? 0 : height),
    // height: height / 2,
    visible: this.props.isOpen,
    backdropVisible: this.props.isOpen
  }

  componentWillReceiveProps(nextProps){
    // Handle whether or not to open
    if(!this.props.isOpen && nextProps.isOpen){
      this.animateOpen();
    } else if (this.props.isOpen && !nextProps.isOpen) {
      this.animateClose();
    }
  }

  animateOpen() {
    this.setState({ visible: true }, () => {
        Animated.timing(
          this.state.position, {
            toValue: 0,
            duration: 500
          }
        ).start();
    });
  }

  animateClose() {
    // Slide down
    Animated.timing(
      this.state.position,  {
        toValue: height,
        duration: 500
      }
    ).start(() => this.setState({ visible: false }));
  }

  render(){
    // const { truck } = this.props;
    const truck = {
      "uuid": "58f5f0ff-e8f6-4517-b859-69215df47ce8",
      "posts": [],
      "owner": "58698a83-6c93-41bc-b60b-46ef305a445b",
      "title": "Donny's Muscles on the Cheap",
      "description": "Yummy protein shakes and shit lol",
      "genre": "Healthy Food",
      "email": "contact@kitaoka.com",
      "phone": "3333333334",
      "averageRating":2.4
    }

    const { post } = this.props;

    if(!this.state.visible){
      return null; // Do nothing because not visible
    } else {
      return (
        <View style={ styles.container }>
          <TouchableWithoutFeedback onPress={ this.props.onClose }>
            <View style= { styles.backdrop }>
            </View>
          </TouchableWithoutFeedback>
          <Animated.View style={ [styles.truckPopup,
              {
                // Animates position on the screen
                transform: [{ translateY: this.state.position }, { translateX: 0 }]
              }
          ] }>
            <View style={ styles.truckProfilePic }>
            </View>
            <View style={ styles.likeButton }>
            </View>
            <View style={ styles.truckCardDetail }>
              <View style={styles.truckInformation}>
                <Text style={ [styles.textCenter, styles.header] }>{ truck.title }</Text>
                <Text style={ styles.textCenter }>{ truck.genre }</Text>
                <Text style={ styles.textCenter }>{ truck.averageRating }</Text>
                <Text style={ [styles.ratingText, styles.textCenter] }>{ post.truck }</Text>
              </View>
              <TouchableOpacity style={styles.seeMoreButton} onPress={ this.props.onSeeMore }>
                <Text style={styles.seeMoreButtonText}>See More</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  truckPopup: {
    marginTop: 25,
    marginBottom: 5,
    alignSelf: 'center',
    width: '90%',
    position:'absolute',
    bottom: -5

  },

  truckProfilePic: {
    position: 'absolute',
    height: 125,
    width: 125,
    backgroundColor: '#aaaaaa',
    alignSelf: 'center',
    zIndex: 3,
    borderRadius: 100,
  },

  likeButton: {
    position: 'absolute',
    width: 65,
    height: 65,
    right: 20,
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: '#aaaaaa',
    zIndex: 3,
  },

  truckCardDetail: {
    alignSelf: 'stretch',
    marginTop: 65,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 20,
  },

  truckInformation: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 75,
    borderRadius: 5,
    paddingHorizontal: 30,
  },

  textCenter: {
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 18,
  },

  ratingText: {
    fontSize: 10
  },

  followers: {
      backgroundColor: '#4245f4', // temp
      borderRadius: 40,
      marginTop: 8,
  },

  followersText: {
      color: 'white',
      marginVertical: 10,
      marginHorizontal: 35,
      fontSize: 18,
  },

  header: {
    fontSize: 28,
  },

  seeMoreButton: {
    backgroundColor: '#ffa61f',
    borderRadius: 30,
    alignSelf: 'center',
    width: '30%',
    marginBottom: 10
  },

  seeMoreButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 5,
      marginHorizontal: 10
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },

  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  }

});
