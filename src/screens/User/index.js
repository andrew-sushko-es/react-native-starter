import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

import {selectProfile} from 'store/auth/selectors';

import * as S from './styled';

const UserScreen = () => {
  const profile = useSelector(selectProfile);
  return (
    <S.Container>
      {profile && <S.ProfileName>{profile.name}</S.ProfileName>}
    </S.Container>
  );
};

export default UserScreen;
