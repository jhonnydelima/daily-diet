import { useNavigation } from '@react-navigation/native';

import { Container, Button } from './styles';

import { IconButton } from '@components/IconButton';

export function Feedback() {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>

      <Button>
        <IconButton
          onPress={handleGoHome}
          description='Ir para a página inicial'
        />
      </Button>

    </Container>
  );
}