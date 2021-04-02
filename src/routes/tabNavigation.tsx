import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { JobScreen } from '../screens/jobs';
import { NetworksScreen } from '../screens/networks';
import { NotificationScreen } from '../screens/notification';
import { PostScreen } from '../screens/post';
import { BottomTabBar } from '.';
import { Host } from 'react-native-portalize';

export type BottomTabList = {
	Home: undefined;
	'My Networks': undefined;
	Post: undefined;
	Notification: undefined;
	Jobs: undefined;
};

const Tab = createBottomTabNavigator<BottomTabList>();

export default () => {
	return (
		<Host>
			<Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="My Networks" component={NetworksScreen} />
				<Tab.Screen name="Post" component={PostScreen} />
				<Tab.Screen name="Notification" component={NotificationScreen} />
				<Tab.Screen name="Jobs" component={JobScreen} />
			</Tab.Navigator>
		</Host>
	);
};
