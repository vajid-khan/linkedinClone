import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {JobScreen} from '../screens/jobs';
import {stackConfig} from './config';

const JobsStack = createStackNavigator();

export default () => (
  <JobsStack.Navigator screenOptions={stackConfig}>
    <JobsStack.Screen name={'Jobs'} component={JobScreen} />
  </JobsStack.Navigator>
);
