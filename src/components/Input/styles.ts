import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_500};
  `};

  width: 100%;
  min-height: 48px;
  max-height: 48px;
  
  border-width: 1px;
  border-radius: 6px;
  
  padding: 14px;
  margin-bottom: 24px;
`;
