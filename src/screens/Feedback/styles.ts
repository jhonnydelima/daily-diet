import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type FeedbackTypeStyleProps = 'IN_DIET' | 'OUT_OF_DIET' | undefined;

type Props = {
  type: FeedbackTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'IN_DIET' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
  margin-bottom: 40px;
`;

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Image = styled.Image`
  margin-bottom: 32px;
`;

export const Button = styled.View`
  width: 190px;
  justify-content: center;
`;