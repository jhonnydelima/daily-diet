import { TouchableOpacityProps } from 'react-native';

import { Description } from '@components/Description';

import { Container, OpenButton, OpenIcon, CardTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  showOpenButton?: boolean;
  type?: CardTypeStyleProps;
}

export function Card({ showOpenButton = false, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type}>
      {showOpenButton && (
        <OpenButton
          onPress={() => console.log("TEST")}
        >
          <OpenIcon type='PRIMARY' />
        </OpenButton>
      )}

      <Description
        title="90,86%"
        subtitle="das refeições dentro da dieta"
      />
    </Container>
  );
}