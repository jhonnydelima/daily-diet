import { useState } from 'react';

import {
  Container,
  Form,
  Row,
  FormItemContainer,
  ButtonView
} from './styles';

import { Body } from '@components/Body';
import { DescriptionInput } from '@components/DescriptionInput';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Input } from '@components/Input';
import { Label } from '@components/Label';
import { MealTypeButton } from '@components/MealTypeButton';

export function NewMeal() {
  const [isInDiet, setIsInDiet] = useState(false);
  const [isOutOfDiet, setIsOutOfDiet] = useState(false);

  function handleInDietType() {
    setIsInDiet(prevState => !prevState);
    setIsOutOfDiet(false);
  }

  function handleOutOfDietType() {
    setIsOutOfDiet(prevState => !prevState);
    setIsInDiet(false);
  }

  return (
    <Container>
      <Header
        backgroundType='TERTIARY'
        iconType='TERTIARY'
        title='Nova refeição'
      />

      <Body>
        <Form>
          <Label label='Nome' />
          <Input />

          <Label label='Descrição' />
          <DescriptionInput />

          <Row>
            <FormItemContainer>
              <Label label='Data' />
              <Input />
            </FormItemContainer>

            <FormItemContainer>
              <Label label='Hora' />
              <Input />
            </FormItemContainer>
          </Row>

          <FormItemContainer>
            <Label label='Está dentro da dieta?' />

            <Row>
              <MealTypeButton
                onPress={handleInDietType}
                title='Sim'
                type={isInDiet ? 'IN_DIET' : undefined}
                iconType='IN_DIET'
              />

              <MealTypeButton
                onPress={handleOutOfDietType}
                title='Não'
                type={isOutOfDiet ? 'OUT_OF_DIET' : undefined}
                iconType='OUT_OF_DIET'
              />
            </Row>
          </FormItemContainer>

          <ButtonView>
            <IconButton
              description='Cadastrar refeição'
            />
          </ButtonView>

        </Form>
      </Body>
    </Container>
  );
}