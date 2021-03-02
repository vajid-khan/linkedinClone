import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NetworksScreen} from '../screens/networks';
import {stackConfig} from './config';

const NotificationStack = createStackNavigator();

export default () => (
  <NotificationStack.Navigator screenOptions={stackConfig}>
    <NotificationStack.Screen
      name={'Notification'}
      component={NetworksScreen}
    />
  </NotificationStack.Navigator>
);
