import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '../screens/auth';

export type AuthStackList = {
  Login: undefined;
  Register: undefined;
};
const Stack = createStackNavigator<AuthStackList>();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Register'} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
