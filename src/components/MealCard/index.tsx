import { TouchableOpacityProps } from 'react-native';
import {
  MealCardTypeStyleProps,
  Container,
  Time,
  Divider,
  Description,
  Icon
} from './styles';

type Props = TouchableOpacityProps & {
  type?: MealCardTypeStyleProps;
  time: string;
  description: string;
}

export function MealCard({ type = 'IN_DIET', time, description, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>
        {time}
      </Time>

      <Divider />

      <Description numberOfLines={1}>
        {description}
      </Description>

      <Icon type={type} />
    </Container>
  );
}