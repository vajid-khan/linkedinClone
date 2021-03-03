import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NetworksScreen} from '../screens/networks';
import {stackConfig} from './config';
import {ChatScreen} from '../screens/chat';

const NetworkStack = createStackNavigator();

export default () => (
  <NetworkStack.Navigator screenOptions={stackConfig}>
    <NetworkStack.Screen name={'Network'} component={NetworksScreen} />
    <NetworkStack.Screen name={'Chat'} component={ChatScreen} />
  </NetworkStack.Navigator>
);
