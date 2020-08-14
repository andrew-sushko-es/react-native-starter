import React from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {selectProfile} from 'store/auth/selectors';

import {USER_DETAILS} from 'navigation/routesNames';

import * as S from './styled';

const UserScreen = (props) => {
  const {navigation} = props;

  const {i18n} = useTranslation();
  const profile = useSelector(selectProfile);

  const navigateTo = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <S.Container>
      <S.ProfileBlock>
        {profile && <S.ProfileName>{profile.name}</S.ProfileName>}
      </S.ProfileBlock>
      <S.ButtonContainer>
        <S.ButtonWrapper
          title={i18n.t('screens.user.seeDetails')}
          onPress={() => navigateTo(USER_DETAILS)}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default UserScreen;
