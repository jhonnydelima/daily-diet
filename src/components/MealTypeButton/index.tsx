import { TouchableOpacityProps } from 'react-native';

import { MealTypeButtonTypeStyleProps, Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: MealTypeButtonTypeStyleProps;
  isActive: boolean;
}

export function MealTypeButton({ title, type, isActive, ...rest }: Props) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} />

      <Title>
        {title}
      </Title>
    </Container>
  );
}