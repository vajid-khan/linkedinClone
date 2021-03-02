import React from 'react';
import {HomeScreen} from '../screens/home';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name={'Home'} component={HomeScreen} />
  </HomeStack.Navigator>
);
