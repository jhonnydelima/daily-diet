import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowUpRight } from 'phosphor-react-native';

type CardButtonTypeStyleProps = {
  type: 'PRIMARY' | 'SECONDARY';
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 50px;
`;

export const CardButton = styled(TouchableOpacity)<CardButtonTypeStyleProps>`
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const OpenIcon = styled(ArrowUpRight).attrs<CardButtonTypeStyleProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 40px;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 32px;
  margin-bottom: 8px;
`;

export const EmptyList = styled.View`
  margin-top: 256px;
  align-items: center;
`;

export const EmptyListText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_400};
  `}
`;