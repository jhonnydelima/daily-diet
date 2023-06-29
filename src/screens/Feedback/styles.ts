import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  justify-content: center;
  align-items: center;
`;

export const Button = styled.View`
  width: 190px;
  justify-content: center;
`;