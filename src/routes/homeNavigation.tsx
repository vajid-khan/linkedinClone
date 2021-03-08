import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {TabNavigation} from '.';
import {ChatScreen} from '../screens/chat';

export type StackList = {
  Home: undefined;
  Chat: undefined;
};
const HomeStack = createStackNavigator<StackList>();

export default () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        // header: (props) => <DefaultHeader {...props} />,
        headerStyle: {
          elevation: 0,
          backgroundColor: 'transparent',
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen name={'Home'} component={TabNavigation} />
      <HomeStack.Screen
        name={'Chat'}
        // options={{
        //   header: (props) => <ChatHeader {...props} />,
        // }}
        component={ChatScreen}
      />
    </HomeStack.Navigator>
  );
};
