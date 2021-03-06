import React from 'react';
import {stackConfig} from './config';
import {ChatScreen} from '../screens/chat';
import ChatHeader from './headers/chatHeader';
import {NetworksScreen} from '../screens/networks';
import {createStackNavigator} from '@react-navigation/stack';

const NetworkStack = createStackNavigator();

export default () => (
  <NetworkStack.Navigator screenOptions={stackConfig}>
    <NetworkStack.Screen name={'Network'} component={NetworksScreen} />
    <NetworkStack.Screen
      name={'Chat'}
      options={{
        header: (props) => <ChatHeader {...props} />,
      }}
      component={ChatScreen}
    />
  </NetworkStack.Navigator>
);
