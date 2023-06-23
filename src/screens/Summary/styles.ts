import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;

  margin-top: -20px;
  padding: 24px;
  
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-top: 32px;
  margin-bottom: 24px;

  align-items: center;
  justify-content: center;
`;