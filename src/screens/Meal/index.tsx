import { useRoute } from '@react-navigation/native';

import { Body } from '@components/Body';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';

import {
  Container,
  Content,
  Tag,
  Icon,
  InfoTitle,
  Description,
  TagDescription,
  ButtonsView
} from './styles';

type RouteParams = {
  type: 'IN_DIET' | 'OUT_OF_DIET' | undefined;
}

export function Meal() {
  const route = useRoute();
  const { type } = route.params as RouteParams;

  return (
    <Container>
      <Header
        backgroundType={type === 'IN_DIET' ? 'PRIMARY' : 'SECONDARY'}
        iconType='TERTIARY'
        title='Refeição'
      />

      <Body>
        <Content>
          <InfoTitle infoTitleType='MEAL_NAME'>
            Sanduíche
          </InfoTitle>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>

          <InfoTitle infoTitleType='DATE_TIME'>
            Data e hora
          </InfoTitle>
          <Description>
            12/08/2022
          </Description>

          <Tag>
            <Icon type={type} />

            <TagDescription>
              {type === 'IN_DIET' ? "dentro da dieta" : "fora da dieta"}
            </TagDescription>
          </Tag>

          <ButtonsView>
            <IconButton
              icon='border-color'
              description='Editar refeição'
            />

            <IconButton
              type='SECONDARY'
              icon='delete-outline'
              description='Excluir refeição'
            />
          </ButtonsView>
        </Content>
      </Body>
    </Container>
  );
}