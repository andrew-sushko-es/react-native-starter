import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';

import {selectProfile} from 'store/auth/selectors';
import {actions as authActions} from 'store/auth';

const RootScreen = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const user = {name: 'Andrew'};

  useEffect(() => {
    dispatch(authActions.authenticate(user));
  }, []);

  return <View>{profile && <Text>{profile.name}</Text>}</View>;
};

export default RootScreen;
