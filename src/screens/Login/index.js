import React from 'react';
import {useTranslation} from 'react-i18next';

import * as S from './styled';

const LoginScreen = () => {
  const {i18n} = useTranslation();
  return (
    <S.Container>
      <S.TitleText>{i18n.t('screens.login.title')}</S.TitleText>
    </S.Container>
  );
};

export default LoginScreen;
