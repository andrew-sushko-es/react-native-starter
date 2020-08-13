import styled from 'styled-components';

export const TouchableContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, buttonColor}) =>
    buttonColor || theme.colors.primary};
  padding: 20px 40px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: ${({textSize}) => textSize || 16}px;
  color: ${({theme, textColor}) => textColor || theme.colors.primaryText};
`;
