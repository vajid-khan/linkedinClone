import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStack,
  JobsStack,
  NetworkStack,
  PostStack,
  LeftDrawer,
  NotificationStack,
} from './routes';
import theme from './theme';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';

          if (route.name === 'My Networks') {
            iconName = 'users';
          } else if (route.name === 'Post') {
            iconName = 'plus-circle';
          } else if (route.name === 'Notification') {
            iconName = 'bell';
          } else if (route.name === 'Jobs') {
            iconName = 'shopping-bag';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="My Networks" component={NetworkStack} />
      <Tab.Screen name="Post" component={PostStack} />
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Jobs" component={JobsStack} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="App"
          drawerContent={(props) => <LeftDrawer {...props} />}>
          <Drawer.Screen name="Home" component={TabNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
