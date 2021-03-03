import React from 'react';
import {HomeScreen} from '../screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import {stackConfig} from './config';
import {ChatScreen} from '../screens/chat';

const HomeStack = createStackNavigator();

export default () => (
  <HomeStack.Navigator screenOptions={stackConfig}>
    <HomeStack.Screen name={'Home'} component={HomeScreen} />
    <HomeStack.Screen name={'Chat'} component={ChatScreen} />
  </HomeStack.Navigator>
);
