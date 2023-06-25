import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin-top: -24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const FormItemContainer = styled.View`
  flex: 1;
`;

export const ButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;