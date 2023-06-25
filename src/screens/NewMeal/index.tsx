import {
  Container,
  HeaderContent,
  Content,
  Form,
  Row,
  DateTimeContent,
  ButtonView
} from './styles';

import { ButtonIcon } from '@components/ButtonIcon';
import { DescriptionInput } from '@components/DescriptionInput';
import { Label } from '@components/Label';
import { Header } from '@components/Header';
import { Input } from '@components/Input';

export function NewMeal() {
  return (
    <Container>
      <HeaderContent>
        <Header
          type='TERTIARY'
          title='Nova refeição'
        />
      </HeaderContent>

      <Content>
        <Form>
          <Label label='Nome' />
          <Input />

          <Label label='Descrição' />
          <DescriptionInput />

          <Row>
            <DateTimeContent>
              <Label label='Data' />
              <Input />
            </DateTimeContent>

            <DateTimeContent>
              <Label label='Hora' />
              <Input />
            </DateTimeContent>
          </Row>

          

        </Form>

        <ButtonView>
          <ButtonIcon
            description='Cadastrar refeição'
          />
        </ButtonView>
      </Content>
    </Container>
  );
}