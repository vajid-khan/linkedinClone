import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostScreen} from '../screens/post';

const PostStack = createStackNavigator();

export default () => (
  <PostStack.Navigator>
    <PostStack.Screen name={'Post'} component={PostScreen} />
  </PostStack.Navigator>
);
