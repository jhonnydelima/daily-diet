import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export type ButtonCardTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonCardTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const OpenIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;
