import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignInPage';
import Login from './LoginPage';
import Profile from './Profile';
import Dashboard from './Dashboard';
// import DrawerNavigationConfig from './DrawerNavigationConfig';

const Stack = createStackNavigator();

const NavigationConfig = () => {
  // let {userState} = route.params
  // console.log(userState)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationConfig;

        