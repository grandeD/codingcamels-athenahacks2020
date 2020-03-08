import React, {Component} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import { information } from '../assets/data/array.js';

export default class HomeScreen extends Component {

constructor() {
    super();
    //Setting up global variable
    global.MyVar = "";
    }

changeScreen = (index) => {
    //Function to navigate to the next screen
    this.props.navigation.navigate("Links");
    global.MyVar = information[index].name;
    };

render() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <TouchableOpacity onPress={() => this.changeScreen(0)}>
            <Image
              source={require('../assets/images/aluminum.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(1)}>
            <Image
              source={require('../assets/images/compostable.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(2)}>
            <Image
              source={require('../assets/images/glass.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(3)}>
            <Image
              source={require('../assets/images/green_dot.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(4)}>
            <Image
              source={require('../assets/images/mobius_loop.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(12)}>
            <Image
              source={require('../assets/images/steel.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(13)}>
            <Image
              source={require('../assets/images/tidyman.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(14)}>
            <Image
              source={require('../assets/images/waste_electricals.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(15)}>
            <Image
              source={require('../assets/images/widely_recycled.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(5)}>
            <Image
              source={require('../assets/images/recycle_one.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(6)}>
            <Image
              source={require('../assets/images/recycle_two.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(7)}>
            <Image
              source={require('../assets/images/recycle_three.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(8)}>
            <Image
              source={require('../assets/images/recycle_four.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(9)}>
            <Image
              source={require('../assets/images/recycle_five.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(10)}>
            <Image
              source={require('../assets/images/recycle_six.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeScreen(11)}>
            <Image
              source={require('../assets/images/recycle_seven.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});