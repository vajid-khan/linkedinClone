import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {TabNavigation} from '.';
import {ChatScreen} from '../screens/chat';
import {SearchScreen} from '../screens/search';

export type StackList = {
  Home: undefined;
  Chat: undefined;
  Search: undefined;
};
const HomeStack = createStackNavigator<StackList>();

export default () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen name={'Home'} component={TabNavigation} />
      <HomeStack.Screen name={'Chat'} component={ChatScreen} />
      <HomeStack.Screen name={'Search'} component={SearchScreen} />
    </HomeStack.Navigator>
  );
};
