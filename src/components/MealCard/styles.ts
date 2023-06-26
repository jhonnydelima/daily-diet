import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type MealCardTypeStyleProps = 'IN_DIET' | 'OUT_OF_DIET';

type Props = {
  type: MealCardTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}

  margin-right: 12px;
`;

export const Divider = styled.View`
  width: 0px;
  height: 14px;
  
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin-right: 12px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  flex: 1;
  flex-shrink: 1;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  name: 'circle',
  size: 14,
  color: type === 'IN_DIET' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
}))`
  margin-left: 12px;
`;