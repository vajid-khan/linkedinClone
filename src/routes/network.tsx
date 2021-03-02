import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NetworksScreen} from '../screens/networks';
import {stackConfig} from './config';

const NetworkStack = createStackNavigator();

export default () => (
  <NetworkStack.Navigator screenOptions={stackConfig}>
    <NetworkStack.Screen name={'Network'} component={NetworksScreen} />
  </NetworkStack.Navigator>
);
