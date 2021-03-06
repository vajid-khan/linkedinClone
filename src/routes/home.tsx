import React from 'react';
import {stackConfig} from './config';
import {HomeScreen} from '../screens/home';
import {ChatScreen} from '../screens/chat';
import ChatHeader from './headers/chatHeader';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default () => (
  <HomeStack.Navigator screenOptions={stackConfig}>
    <HomeStack.Screen name={'Home'} component={HomeScreen} />
    <HomeStack.Screen
      name={'Chat'}
      options={{
        header: (props) => <ChatHeader {...props} />,
      }}
      component={ChatScreen}
    />
  </HomeStack.Navigator>
);
