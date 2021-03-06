import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import InfographicScreen from '../screens/InfographicScreen';
import IconSelectionScreen from '../screens/IconSelectionScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
        <BottomTab.Screen
        name="Icons"
        component={IconSelectionScreen}
        options={{
          title: 'Icons',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
        />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

      <BottomTab.Screen
        name="Info"
        component={InfographicScreen}
        options={{
          title: 'Info',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />



    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Icons':
        return 'Icons';
    case 'Links':
      return 'Loading';
    case 'Info':
      return 'Infographic Screen';
  }
}
