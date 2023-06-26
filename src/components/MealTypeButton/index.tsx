import { TouchableOpacityProps } from 'react-native';

import { MealTypeButtonTypeStyleProps, Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: MealTypeButtonTypeStyleProps;
  iconType?: MealTypeButtonTypeStyleProps;
}

export function MealTypeButton({ title, type, iconType, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={iconType} />

      <Title>
        {title}
      </Title>
    </Container>
  );
}