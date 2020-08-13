import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {actions as authActions} from 'store/auth';
import {selectProfile} from 'store/auth/selectors';

import AuthStack from 'navigation/AuthStack';
import AppStack from 'navigation/AppStack';

const user = {name: 'Andrew'};

const RootScreen = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.authenticate(user));
  }, []);

  return (
    <NavigationContainer>
      {profile ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootScreen;
