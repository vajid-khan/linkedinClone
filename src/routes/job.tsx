import React from 'react';
import {stackConfig} from './config';
import {JobScreen} from '../screens/jobs';
import {ChatScreen} from '../screens/chat';
import ChatHeader from './headers/chatHeader';
import {createStackNavigator} from '@react-navigation/stack';

const JobsStack = createStackNavigator();

export default () => (
  <JobsStack.Navigator screenOptions={stackConfig}>
    <JobsStack.Screen name={'Jobs'} component={JobScreen} />
    <JobsStack.Screen
      name={'Chat'}
      options={{
        header: (props) => <ChatHeader {...props} />,
      }}
      component={ChatScreen}
    />
  </JobsStack.Navigator>
);
