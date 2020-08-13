import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {USER} from './routesNames';

import UserScreen from 'screens/User';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={USER}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={USER} component={UserScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
