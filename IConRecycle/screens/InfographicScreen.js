import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-cards';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Unorderedlist from 'react-native-unordered-list';
import { FloatingAction } from "react-native-floating-action";
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { MonoText } from '../components/StyledText';

export default function InfographicScreen() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View style={styles.container1}></View>
            <Card style={styles.cardCon}>
                <Text style={styles.titleCon}>Lorem Ipsum</Text>
                <Text style={styles.explanationCon}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Card>
            <Card style={styles.cardCon1}>
                <Text style={styles.titleCon}>Lorem Ipsum Ipsum Lorem:</Text>
                <Unorderedlist style={styles.listCon}>
                    <Text>ad minim veniam</Text>
                </Unorderedlist>
                <Unorderedlist style={styles.listCon}>
                    <Text>ad minim veniam</Text>
                </Unorderedlist>
                <Unorderedlist style={styles.listCon}>
                    <Text>ad minim veniam</Text>
                </Unorderedlist>
                <Unorderedlist style={styles.listCon}>
                    <Text>ad minim veniam</Text>
                </Unorderedlist>
            </Card>
        </ScrollView>
        {/* <FloatingAction style={styles.fab}>
            <Icon class="fas fa-camera"></Icon>
        </FloatingAction>
        <TouchableOpacity style={styles.fab}>
            <Text style={styles.text}>+</Text>
            <i class="fas fa-camera"></i>
            <FontAwesomeIcon icon="coffee" />
            <Icon name={camera} size={40}/>
        </TouchableOpacity> */}
    </View>
  );
}

InfographicScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    top: 0,
    height: 200,
    backgroundColor: '#81CEA2',
  },
  cardCon: {
    margin: 20,
    borderRadius: 20
  },
  titleCon: {
    marginLeft: 20,
    marginTop: 20
  },
  explanationCon: {
    margin: 20
  },
  cardCon1: {
    marginLeft: 20,
    marginRight: 20
  },
  listCon: {
    paddingLeft: 20,
  },
  fab: {
    backgroundColor: '#41A56C',
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
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
