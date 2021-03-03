import React from 'react';
import Header from './component/header';
import {StackNavigationOptions} from '@react-navigation/stack';

export const stackConfig: StackNavigationOptions = {
  headerTitle: (props) => <Header {...props} />,
  headerStyle: {
    elevation: 0,
  },
};
