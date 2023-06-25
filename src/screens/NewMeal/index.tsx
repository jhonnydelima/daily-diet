import {
  Container,
  Form,
  Row,
  FormItemContainer,
  ButtonView
} from './styles';

import { Body } from '@components/Body';
import { ButtonIcon } from '@components/ButtonIcon';
import { DescriptionInput } from '@components/DescriptionInput';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Label } from '@components/Label';

export function NewMeal() {
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

            </Row>
          </FormItemContainer>

          <ButtonView>
            <ButtonIcon
              description='Cadastrar refeição'
            />
          </ButtonView>

        </Form>
      </Body>
    </Container>
  );
}