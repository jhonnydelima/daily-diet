import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type IconButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: IconButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;

  height: 50px;
  border-radius: 6px;
  
  align-items: center;
  justify-content: center;

  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
    border-width: ${type === 'PRIMARY' ? 0 : 1}px;
    border-color:${type === 'PRIMARY' ? undefined: theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``;

export const Description = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;