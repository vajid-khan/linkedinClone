import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LeftDrawer, AppStackNavigation} from './routes';
import theme from './theme';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle={'dark-content'}
        />
        <Drawer.Navigator
          initialRouteName="App"
          drawerContent={(props) => <LeftDrawer {...props} />}>
          <Drawer.Screen name="Home" component={AppStackNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
