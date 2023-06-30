import { useNavigation, useRoute } from '@react-navigation/native';

import { FeedbackTypeStyleProps, Container, Title, Subtitle, Strong, Image, Button } from './styles';

import { IconButton } from '@components/IconButton';

import positiveFeedbackImg from '@assets/positive-feedback.png';
import negativeFeedbackImg from '@assets/negative-feedback.png';

type RouteParams = {
  type: FeedbackTypeStyleProps;
}

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { type } = route.params as RouteParams;

  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title
        type={type}
      >
        { type === 'IN_DIET' ? "Continue assim!" : "Que pena!" }
      </Title>

      {type === 'IN_DIET' ? (
        <Subtitle>Você continua <Strong>dentro da dieta</Strong>. Muito bem!</Subtitle>
      ) : (
        <Subtitle>Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se esforçando e não desista!</Subtitle>
      )}

      <Image
        source={type === 'IN_DIET' ? positiveFeedbackImg : negativeFeedbackImg}
      />

      <Button>
        <IconButton
          onPress={handleGoHome}
          description='Ir para a página inicial'
        />
      </Button>

    </Container>
  );
}