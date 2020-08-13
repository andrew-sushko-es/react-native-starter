import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {USER, USER_DETAILS} from './routesNames';

import UserScreen from 'screens/User';
import UserDetailsScreen from 'screens/UserDetails';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={USER}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={USER} component={UserScreen} />
      <Stack.Screen name={USER_DETAILS} component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
