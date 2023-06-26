import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { IconButtonTypeStyleProps, Container, Icon, Description } from './styles';

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  description: string;
  type?: IconButtonTypeStyleProps;
}

export function IconButton({description, icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      {icon && (
        <Icon
          name={icon}
          type={type}
        />
      )}
      
      <Description type={type}>
        {description}
      </Description>
    </Container>
  );
}