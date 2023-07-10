import { Platform } from 'react-native';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
}

export function Body({ children }: Props) {
  return (
    <Container
      style={[Platform.OS === 'android' && {paddingTop: 16}]}
    >
      {children}
    </Container>
  );
}