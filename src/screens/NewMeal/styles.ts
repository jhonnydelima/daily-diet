import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContent = styled(SafeAreaView)`
  height: 132px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
  margin-top: -20px;
  padding: 0 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  /* border-width: 3px; */
`;

export const Form = styled.View`
  height: 430px;
  /* border-width: 3px; */
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const DateTimeContent = styled.View`
  flex: 1;
`;

export const ButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

