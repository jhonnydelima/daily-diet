import { useEffect, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
import { FeedbackTypeStyleProps } from '@screens/Feedback/styles';

export function EditMeal() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [mealType, setMealType] = useState<FeedbackTypeStyleProps>(undefined);
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleSaveChanges() {
    navigation.navigate('home');
  }

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

  function handleMealType(type: FeedbackTypeStyleProps) {
    setMealType(type);
  }

  function fetchMealById() {
    try {
      setLoading(true);


    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMealById();
  }, [])

  return (
    <Container>
      <Header
        backgroundType='TERTIARY'
        iconType='TERTIARY'
        title='Editar refeição'
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
                onPress={() => handleMealType('IN_DIET')}
                title='Sim'
                type='IN_DIET'
                isActive={mealType === 'IN_DIET'}
              />

              <MealTypeButton
                onPress={() => handleMealType('OUT_OF_DIET')}
                title='Não'
                type='OUT_OF_DIET'
                isActive={mealType === 'OUT_OF_DIET'}
              />
            </Row>
          </FormItemContainer>

          <ButtonView>
            <IconButton
              onPress={handleSaveChanges}
              description='Salvar alterações'
            />
          </ButtonView>

        </Form>
      </Body>
    </Container>
  );
}