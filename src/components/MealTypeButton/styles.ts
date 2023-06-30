import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type MealTypeButtonTypeStyleProps = 'IN_DIET' | 'OUT_OF_DIET' | undefined;

type Props = {
  type: MealTypeButtonTypeStyleProps;
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  min-height: 48px;
  max-height: 48px;
  border-radius: 6px;
  border-width: ${({ type, isActive }) => isActive && type !== undefined && 1}px;

  ${({ theme, type, isActive }) => css`
    background-color: ${(
      isActive && type === 'IN_DIET' ? theme.COLORS.GREEN_LIGHT :
      isActive && type === 'OUT_OF_DIET' ? theme.COLORS.RED_LIGHT :
      theme.COLORS.GRAY_600
    )};
    border-color: ${(
      isActive && type === 'IN_DIET' ? theme.COLORS.GREEN_DARK :
      isActive && type === 'OUT_OF_DIET' ? theme.COLORS.RED_DARK :
      undefined
    )};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  name: 'circle',
  size: 8,
  color: (
    type === 'IN_DIET' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  )
}))`
  margin-right: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;