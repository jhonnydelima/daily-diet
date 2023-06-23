import { useNavigation } from '@react-navigation/native';

import { HeaderTypeStyleProps, Container, BackButton, BackIcon, Title } from './styles';

type Props = {
  type?: HeaderTypeStyleProps;
  title?: string;
}

export function Header({ type = 'PRIMARY', title }: Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <BackButton onPress={handleGoHome}>
        <BackIcon type={type} />
      </BackButton>

      { title && (
        <Title>
          {title}
        </Title>
      )}

    </Container>
  );
}