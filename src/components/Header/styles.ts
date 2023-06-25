import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'phosphor-react-native';

export type HeaderTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
  type: HeaderTypeStyleProps;
}

export const Container = styled(SafeAreaView)<Props>`
  padding: 0 24px;
  background-color: ${
    ({ theme, type }) => (
      type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT :
      type === 'SECONDARY' ? theme.COLORS.RED_LIGHT :
      theme.COLORS.GRAY_500
    )
  };
`;

export const Content = styled.View`
  flex: 1;
  margin-bottom: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 25%;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: (
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK :
    type === 'SECONDARY' ? theme.COLORS.RED_DARK :
    theme.COLORS.GRAY_200),
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  position: absolute;
  align-self: center;
`;