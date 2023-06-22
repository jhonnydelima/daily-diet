import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconTypeStyleProps, Container, Icon, Description } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  description: string;
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({description, icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Icon
        name={icon}
        type={type}
      />
      
      <Description type={type}>
        {description}
      </Description>
    </Container>
  );
}