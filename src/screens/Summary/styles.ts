import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type SummaryTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: SummaryTypeStyleProps;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderContent = styled.View`
  padding: 24px;
`;

export const BodyContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
  padding: 24px;
  margin-bottom: -100px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-top: 12px;
  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
`;