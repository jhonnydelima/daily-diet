import { useNavigation } from '@react-navigation/native';

import { Container, Title, Subtitle, Image, Button } from './styles';

import { IconButton } from '@components/IconButton';

import positiveFeedbackImg from '@assets/positive-feedback.png';
import negativeFeedbackImg from '@assets/negative-feedback.png';

export function Feedback() {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title
        type='PRIMARY'
      >
        Continue assim!
      </Title>

      <Subtitle>
        Você continua dentro da dieta. Muito bem!
      </Subtitle>

      <Image source={positiveFeedbackImg} />

      <Button>
        <IconButton
          onPress={handleGoHome}
          description='Ir para a página inicial'
        />
      </Button>

    </Container>
  );
}