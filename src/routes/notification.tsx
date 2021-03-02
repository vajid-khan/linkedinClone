import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {stackConfig} from './config';
import {NotificationScreen} from '../screens/notification';

const NotificationStack = createStackNavigator();

export default () => (
  <NotificationStack.Navigator screenOptions={stackConfig}>
    <NotificationStack.Screen
      name={'Notification'}
      component={NotificationScreen}
    />
  </NotificationStack.Navigator>
);
