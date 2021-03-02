import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NetworksScreen} from '../screens/networks';

const NetworkStack = createStackNavigator();

export default () => (
  <NetworkStack.Navigator>
    <NetworkStack.Screen name={'Network'} component={NetworksScreen} />
  </NetworkStack.Navigator>
);
