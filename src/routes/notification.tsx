import React from 'react';
import {stackConfig} from './config';
import {ChatScreen} from '../screens/chat';
import ChatHeader from './headers/chatHeader';
import {NotificationScreen} from '../screens/notification';
import {createStackNavigator} from '@react-navigation/stack';

const NotificationStack = createStackNavigator();

export default () => (
  <NotificationStack.Navigator screenOptions={stackConfig}>
    <NotificationStack.Screen
      name={'Notification'}
      component={NotificationScreen}
    />
    <NotificationStack.Screen
      name={'Chat'}
      options={{
        header: (props) => <ChatHeader {...props} />,
      }}
      component={ChatScreen}
    />
  </NotificationStack.Navigator>
);
