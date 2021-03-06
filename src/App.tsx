import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LeftDrawer, AppStackNavigation} from './routes';
import theme from './theme';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="App"
          drawerContent={(props) => <LeftDrawer {...props} />}>
          <Drawer.Screen name="Home" component={AppStackNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
