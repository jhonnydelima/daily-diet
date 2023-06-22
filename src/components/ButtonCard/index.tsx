import { TouchableOpacityProps } from 'react-native';

import { Description } from '@components/Description';

import { Container, OpenIcon, ButtonCardTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  showOpenIcon?: boolean;
  type?: ButtonCardTypeStyleProps;
  dietPercentage: number;
}

export function ButtonCard({
  showOpenIcon = false,
  type = 'PRIMARY',
  dietPercentage,
  ...rest
}: Props) {
  return (
    <Container
      onPress={() => console.log("TEST")}
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