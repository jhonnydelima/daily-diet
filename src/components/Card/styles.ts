import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export type CardTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: CardTypeStyleProps;
}

export const Container = styled.View<Props>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const OpenButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 2;
  align-self: flex-end;
`;

export const OpenIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  right: 8px;
  top: 8px;
`;

