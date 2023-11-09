//import package
import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//import screens
import Splash from '../screens/initialScreens/splash';
import Home from '../screens/homeScreens/home';
import Chat from '../screens/homeScreens/chat';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Splash'}>
          <Stack.Screen name={'Splash'} component={Splash} />
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'Chat'} component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
