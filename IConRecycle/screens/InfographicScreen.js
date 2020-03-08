import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-cards';
import { FloatingAction } from "react-native-floating-action";
import { Icon } from 'react-native-elements';
import { information } from '../assets/data/array.js';



export default function InfographicScreen() {
  return (
    <View style={styles.container}>
        {/* {showInfo("Waste Electricals")} */}
        {showInfo(global.MyVar)}
    </View>
  );
}

function showInfo( iconName ) {
    for (let i=0; i < information.length; i++) {
        if (iconName == information[i].name) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.container}>
                        <View style={styles.container1}>
                            <Image
                                style={styles.iconImage}
                                source={information[i].icon}
                            />
                        </View>
                        <Card style={styles.cardCon}>
                            <Text style={styles.titleCon}>{information[i].name}</Text>
                            <Text style={styles.explanationCon}>
                                {information[i].description}
                            </Text>
                        </Card>
                        <Card style={styles.cardCon1}>
                            <Text style={styles.titleCon1}>How to recycle:</Text>
                            <Text style={styles.explanationCon}>
                                {information[i].recycleInfo}
                            </Text>
                        </Card>
                    </ScrollView>
                    <FloatingAction
                        color={'#41A56C'}
                        floatingIcon={
                        <Icon
                            name='camera'
                            type='font-awesome' color='white'/>}/>
                </View>            
            );
        }
    }
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
  iconImage: {
    marginLeft: 20,
    marginTop: 36,
    width: 150,
    height: 150
  },
  
  cardCon: {
    margin: 20,
    borderRadius: 20
  },
  titleCon: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
    // fontFamily: 'Avenir',
    fontSize: 18
  },
  explanationCon: {
    margin: 20,
    // fontFamily: 'Avenir',
    fontSize: 15
  },

  titleCon1: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
    // fontFamily: 'Avenir',
    fontSize: 18
  },
  cardCon1: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20
  }
});
