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
} from './src/routes';
import theme from './src/theme';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="My Networks" component={NetworkStack} />
      <Tab.Screen name="Post" component={PostStack} />
      <Tab.Screen name="Notification" component={NetworkStack} />
      <Tab.Screen name="Jobs" component={JobsStack} />
    </Tab.Navigator>
  );
};

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="App"
      drawerContent={() => <LeftDrawer />}>
      <Drawer.Screen name="Home" component={AppNavigation} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};
