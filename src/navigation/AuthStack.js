import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LOGIN} from './routesNames';

import LoginScreen from 'screens/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
