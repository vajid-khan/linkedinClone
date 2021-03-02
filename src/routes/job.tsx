import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {JobScreen} from '../screens/jobs';

const JobsStack = createStackNavigator();

export default () => (
  <JobsStack.Navigator>
    <JobsStack.Screen name={'Jobs'} component={JobScreen} />
  </JobsStack.Navigator>
);
