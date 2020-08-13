import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

import {selectProfile} from 'store/auth/selectors';

const UserScreen = () => {
  const profile = useSelector(selectProfile);
  return <View>{profile && <Text>{profile.name}</Text>}</View>;
};

export default UserScreen;
