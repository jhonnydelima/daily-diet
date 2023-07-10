import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  HeaderTypeStyleProps,
  Container,
  Content,
  BackButton,
  BackIcon,
  Title
} from './styles';

type Props = {
  backgroundType?: HeaderTypeStyleProps;
  iconType?: HeaderTypeStyleProps;
  title?: string;
  children?: React.ReactNode;
}

export function Header({ backgroundType = 'PRIMARY', iconType = 'PRIMARY', title, children }: Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.goBack();
  }

  return (
    <Container
      type={backgroundType}
      style={[Platform.OS === 'android' && {minHeight: 104}]}
    >
      <Content>
        <BackButton onPress={handleGoHome}>
          <BackIcon type={iconType} />
        </BackButton>

        { title && (
          <Title>
            {title}
          </Title>
        )}

        {children}
      </Content>
    </Container>
  );
}