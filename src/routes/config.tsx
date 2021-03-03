import React from 'react';
import Header from './component/header';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

export const stackConfig: StackNavigationOptions = {
  header: (props) => <Header {...props} />,
  headerStyle: {
    elevation: 0,
    backgroundColor: 'transparent',
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
