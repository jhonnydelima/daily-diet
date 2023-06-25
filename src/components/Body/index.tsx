import { Container } from './styles';

type Props = {
  children: React.ReactNode;
}

export function Body({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}