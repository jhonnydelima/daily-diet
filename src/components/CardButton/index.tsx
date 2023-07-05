import { TouchableOpacityProps } from 'react-native';

import { Description } from '@components/Description';

import { Container, OpenIcon, CardButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  showOpenIcon?: boolean;
  type?: CardButtonTypeStyleProps;
  dietPercentage: number;
}

export function CardButton({
  showOpenIcon = false,
  type = 'PRIMARY',
  dietPercentage,
  ...rest
}: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      {showOpenIcon && <OpenIcon type={type} />}

      <Description
        title={dietPercentage.toString().replace('.', ',') + '%'}
        subtitle='das refeições dentro da dieta'
      />
    </Container>
  );
}