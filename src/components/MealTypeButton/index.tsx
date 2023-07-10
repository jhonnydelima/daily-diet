import { Dispatch, SetStateAction } from 'react';

import { MealTypeButtonTypeStyleProps, Container, Icon, Title } from './styles';

type Props = {
  title: string;
  type?: MealTypeButtonTypeStyleProps;
  isActive: boolean;
  setState: Dispatch<SetStateAction<MealTypeButtonTypeStyleProps>>;
}

export function MealTypeButton({ title, type, isActive, setState }: Props) {
  return (
    <Container
      type={type}
      isActive={isActive}
      onPress={() => setState(type)}
    >
      <Icon type={type} />

      <Title>
        {title}
      </Title>
    </Container>
  );
}