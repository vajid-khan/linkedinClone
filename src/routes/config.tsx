import React from 'react';
import Header from './headers';
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
