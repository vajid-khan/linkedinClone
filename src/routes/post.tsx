import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostScreen} from '../screens/post';
import {stackConfig} from './config';

const PostStack = createStackNavigator();

export default () => (
  <PostStack.Navigator screenOptions={{...stackConfig, headerShown: false}}>
    <PostStack.Screen name={'Post'} component={PostScreen} />
  </PostStack.Navigator>
);
