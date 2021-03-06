import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ChatHeader, DefaultHeader, TabNavigation} from '.';
import {ChatScreen} from '../screens/chat';

const HomeStack = createStackNavigator();

export default () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: (props) => <DefaultHeader {...props} />,
        headerStyle: {
          elevation: 0,
          backgroundColor: 'transparent',
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen name={'App'} component={TabNavigation} />
      <HomeStack.Screen
        name={'Chat'}
        options={{
          header: (props) => <ChatHeader {...props} />,
        }}
        component={ChatScreen}
      />
    </HomeStack.Navigator>
  );
};
