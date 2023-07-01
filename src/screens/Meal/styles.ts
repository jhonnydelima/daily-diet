import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export type MealTypeStyleProps = 'IN_DIET' | 'OUT_OF_DIET';

type Props = {
  type: MealTypeStyleProps;
}

type InfoTitleProps = {
  infoTitleType: 'MEAL_NAME' | 'DATE_TIME';
}

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin-top: -24px;
`;

export const InfoTitle = styled.Text<InfoTitleProps>`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme, infoTitleType }) => (
    infoTitleType === 'MEAL_NAME' ? theme.FONT_SIZE.LG : theme.FONT_SIZE.SM
  )}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  margin-top: 4px;
  margin-bottom: 24px;
`;

export const Tag = styled.View`
  flex-direction: row;
  gap: 8px;

  height: 34px;
  padding: 8px 16px;
  
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  name: 'circle',
  size: 8,
  color: (
    type === 'IN_DIET' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  )
}))``;

export const TagDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonsView = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 12px;
`;