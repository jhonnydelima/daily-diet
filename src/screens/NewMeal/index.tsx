import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import { ptBR } from "date-fns/locale"

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
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isInDiet, setIsInDiet] = useState(false);
  const [isOutOfDiet, setIsOutOfDiet] = useState(false);

  function showDatePicker() {
    setIsDatePickerVisible(true);
  };

  function hideDatePicker() {
    setIsDatePickerVisible(false);
  };

  function handleConfirmDate(date: Date) {
    const formattedDate = format(date, "dd/MM/yyyy", { locale: ptBR });
    setDate(formattedDate);
    hideDatePicker();
  };

  function showTimePicker() {
    setIsTimePickerVisible(true);
  };

  function hideTimePicker() {
    setIsTimePickerVisible(false);
  };

  function handleConfirmTime(time: Date) {
    const formattedTime = format(time, "HH:mm");
    setTime(formattedTime);
    hideTimePicker();
  };

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
              <Input
                onPressIn={showDatePicker}
                value={date.toString()}
              />

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
            </FormItemContainer>

            <FormItemContainer>
              <Label label='Hora' />
              <Input
                onPressIn={showTimePicker}
                value={time.toString()}
              />

              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />
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