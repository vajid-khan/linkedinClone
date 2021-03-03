import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {stackConfig} from './config';
import {NotificationScreen} from '../screens/notification';
import {ChatScreen} from '../screens/chat';

const NotificationStack = createStackNavigator();

export default () => (
  <NotificationStack.Navigator screenOptions={stackConfig}>
    <NotificationStack.Screen
      name={'Notification'}
      component={NotificationScreen}
    />
    <NotificationStack.Screen name={'Chat'} component={ChatScreen} />
  </NotificationStack.Navigator>
);
