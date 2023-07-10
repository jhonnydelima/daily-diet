import { TextInputProps } from 'react-native';

import { Container } from './styles';

export function DescriptionInput({ ...rest }: TextInputProps) {
  return (
    <Container
      textAlignVertical='top'
      autoCorrect={false}
      multiline
      numberOfLines={3}
      scrollEnabled={false}
      {...rest}
    />
  );
}