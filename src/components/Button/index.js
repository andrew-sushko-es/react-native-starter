import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = (props) => {
  const {title, buttonColor, textColor, textSize, onPress} = props;
  return (
    <S.TouchableContainer onPress={onPress} buttonColor={buttonColor}>
      <S.ButtonText textColor={textColor} textSize={textSize}>
        {title}
      </S.ButtonText>
    </S.TouchableContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
};

export default Button;
