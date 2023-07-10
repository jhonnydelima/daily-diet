import { useState } from 'react';
import { Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import uuid from 'react-native-uuid';
import { object, string, mixed } from 'yup';

import { mealCreate } from '@storage/meal/mealCreate';

import { Body } from '@components/Body';
import { DescriptionInput } from '@components/DescriptionInput';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Input } from '@components/Input';
import { Label } from '@components/Label';
import { MealTypeButton } from '@components/MealTypeButton';
import { MealTypeButtonTypeStyleProps } from '@components/MealTypeButton/styles';

import { Container, Form, Row, FormItemContainer, ButtonView } from './styles';

const mealSchema = object({
  id: string().required(),
  name: string().required("O campo nome é obrigatório."),
  description: string().required("O campo descrição é obrigatório."),
  date: string().required("Selecione a data."),
  time: string().required("Selecione a hora."),
  type: mixed<'IN_DIET' | 'OUT_OF_DIET'>().required("Selecione um tipo de refeição."),
});

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [mealType, setMealType] = useState<MealTypeButtonTypeStyleProps>(undefined);

  const navigation = useNavigation();

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

  async function handleAddMeal() {
    try {
      const newMeal = {
        id: uuid.v4(),
        name,
        description,
        date,
        time,
        type: mealType,
      }

      const parsedMeal = await mealSchema.validate(
        newMeal,
        { strict: true },
      );

      await mealCreate(parsedMeal);
      navigation.navigate('feedback', { type: mealType });
    } catch (error) {
      Alert.alert("Refeição", error.message);
      console.log(error);
    }
  }

  return (
    <Container>
      <Header
        backgroundType='TERTIARY'
        iconType='TERTIARY'
        title="Nova refeição"
      />

      <Body>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Form>
            <Label label="Nome" />
            <Input
              value={name}
              onChangeText={setName}
            />

            <Label label="Descrição" />
            <DescriptionInput
              value={description}
              onChangeText={setDescription}
            />

            <Row>
              <FormItemContainer>
                <Label label="Data" />
                <Input
                  onPressIn={showDatePicker}
                  value={date.toString()}
                />

                <DateTimePicker
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleConfirmDate}
                  onCancel={hideDatePicker}
                />
              </FormItemContainer>

              <FormItemContainer>
                <Label label="Hora" />
                <Input
                  onPressIn={showTimePicker}
                  value={time.toString()}
                />

                <DateTimePicker
                  isVisible={isTimePickerVisible}
                  mode='time'
                  onConfirm={handleConfirmTime}
                  onCancel={hideTimePicker}
                />
              </FormItemContainer>
            </Row>

            <FormItemContainer>
              <Label label="Está dentro da dieta?" />

              <Row>
                <MealTypeButton
                  setState={setMealType}
                  title="Sim"
                  type={'IN_DIET'}
                  isActive={mealType === 'IN_DIET'}
                />

                <MealTypeButton
                  setState={setMealType}
                  title="Não"
                  type={'OUT_OF_DIET'}
                  isActive={mealType === 'OUT_OF_DIET'}
                />
              </Row>
            </FormItemContainer>

            <ButtonView>
              <IconButton
                onPress={handleAddMeal}
                description="Cadastrar refeição"
              />
            </ButtonView>
          </Form>
        </TouchableWithoutFeedback>
      </Body>
    </Container>
  );
}