import theme from './theme';
import AuthStack from './routes/auth';
import {StatusBar} from 'react-native';
import React, {useState} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import UserContext from './context/UserContext';
import {LeftDrawer, AppStackNavigation} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default () => {
  const [user, setUser] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={theme.colors.light}
            barStyle={'dark-content'}
          />
          {user ? (
            <AuthStack />
          ) : (
            <Drawer.Navigator
              initialRouteName="App"
              drawerContent={(props) => <LeftDrawer {...props} />}>
              <Drawer.Screen name="Home" component={AppStackNavigation} />
            </Drawer.Navigator>
          )}
        </NavigationContainer>
      </UserContext.Provider>
    </ThemeProvider>
  );
};
