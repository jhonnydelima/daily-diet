import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import uuid from 'react-native-uuid';
import { object, string, mixed } from 'yup';

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
import { Loading } from '@components/Loading';
import { MealTypeButton } from '@components/MealTypeButton';
import { MealTypeButtonTypeStyleProps } from '@components/MealTypeButton/styles';
import { Modal } from '@components/Modal';

import { mealGetById } from '@storage/meal/mealGetById';
import { mealRemoveById } from '@storage/meal/mealRemoveById';
import { mealCreate } from '@storage/meal/mealCreate';

type RouteParams = {
  id: string;
}

const mealSchema = object({
  id: string().required(),
  name: string().required("O campo nome é obrigatório."),
  description: string().required("O campo descrição é obrigatório."),
  date: string().required("Selecione a data."),
  time: string().required("Selecione a hora."),
  type: mixed<'IN_DIET' | 'OUT_OF_DIET'>().required("Selecione um tipo de refeição."),
});

export function EditMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [mealType, setMealType] = useState<MealTypeButtonTypeStyleProps>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

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

  async function handleSaveChanges() {
    try {
      const newMeal = {
        id: uuid.v4().toString(),
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

      await mealRemoveById(id);
      await mealCreate(parsedMeal);

      navigation.navigate('home');
    } catch (error) {
      Alert.alert("Refeição", error.message);
      console.log(error);
    }
  }

  async function fetchMeal() {
    try {
      setLoading(true);

      const meal = await mealGetById(id);
      setName(meal?.name as string);
      setDescription(meal?.description as string);
      setDate(meal?.date as string);
      setTime(meal?.time as string);
      setMealType(meal?.type);
    } catch (error) {
      Alert.alert("Editar refeição", "Não foi possível carregar os dados da refeição.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <Container>
      <Header
        backgroundType='TERTIARY'
        iconType='TERTIARY'
        title="Editar refeição"
      />

      <Body>
        {isLoading ? (
          <Loading />
        ) : (
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

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
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

                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
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
                  type='IN_DIET'
                  isActive={mealType === 'IN_DIET'}
                />

                <MealTypeButton
                  setState={setMealType}
                  title="Não"
                  type='OUT_OF_DIET'
                  isActive={mealType === 'OUT_OF_DIET'}
                />
              </Row>
            </FormItemContainer>

            <ButtonView>
              <IconButton
                onPress={() => setIsModalVisible(true)}
                description="Salvar alterações"
              />
            </ButtonView>

            <Modal
              modalText="Deseja realmente atualizar o registro da refeição?"
              isModalVisible={isModalVisible}
              setModalState={setIsModalVisible}
              onConfirmPress={handleSaveChanges}
            />
          </Form>
        )}
        
      </Body>
    </Container>
  );
}