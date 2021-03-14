import theme from './theme';
import AuthStack from './routes/auth';
import {BackHandler, StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import UserContext from './context/UserContext';
import React, {useRef, useEffect, useState} from 'react';
import {LeftDrawer, AppStackNavigation} from './routes';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default () => {
  const [user, setUser] = useState(undefined);
  const navigationRef = useRef<NavigationContainerRef>(null);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  const handleBackPress = () => {
    if (!navigationRef.current?.canGoBack()) {
      return true;
    }
    return false;
  };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{user, setUser}}>
        <NavigationContainer ref={navigationRef}>
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
