import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NetworksScreen} from '../screens/networks';

const NotificationStack = createStackNavigator();

export default () => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen
      name={'Notification'}
      component={NetworksScreen}
    />
  </NotificationStack.Navigator>
);
