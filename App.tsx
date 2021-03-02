import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, JobsStack, NetworkStack, PostStack} from './src/routes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="My Networks" component={NetworkStack} />
        <Tab.Screen name="Post" component={PostStack} />
        <Tab.Screen name="Notification" component={NetworkStack} />
        <Tab.Screen name="Jobs" component={JobsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
