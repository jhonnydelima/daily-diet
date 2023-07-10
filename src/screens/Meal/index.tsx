import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Body } from '@components/Body';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Loading } from '@components/Loading';
import { Modal } from '@components/Modal';

import { mealGetById } from '@storage/meal/mealGetById';
import { mealRemoveById } from '@storage/meal/mealRemoveById';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

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
  id: string;
}

export function Meal() {
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<MealStorageDTO>();
  const [isRemoveMealModalVisible, setIsRemoveMealModalVisible] = useState(false);
  const [isRemovalSucceedModalVisible, setIsRemovalSucceedModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  function handleEditMeal() {
    navigation.navigate('edit', { id });
  }

  async function handleDeleteMeal() {
    try {
      await mealRemoveById(id);
      setIsRemoveMealModalVisible(false);
      setIsRemovalSucceedModalVisible(true);
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível remover a refeição selecionada.");
      console.log(error);
    }
  }

  function handleGoToHome() {
    setIsRemovalSucceedModalVisible(false);
    navigation.navigate('home');
  }

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const meal = await mealGetById(id);
      setMeal(meal);
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível carregar a refeição selecionada.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <Container>
      <Header
        backgroundType={
          meal === undefined ? 'TERTIARY' :
          meal?.type === 'IN_DIET' ? 'PRIMARY' : 'SECONDARY'
        }
        iconType='TERTIARY'
        title='Refeição'
      />

      <Body>
        <Content>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <InfoTitle infoTitleType='MEAL_NAME'>
                {meal?.name}
              </InfoTitle>
              <Description>
                {meal?.description}
              </Description>

              <InfoTitle infoTitleType='DATE_TIME'>
                Data e hora
              </InfoTitle>
              <Description>
                {meal?.date} às {meal?.time}
              </Description>

              <Tag>
                <Icon type={meal?.type} />

                <TagDescription>
                  {meal?.type === 'IN_DIET' ? "dentro da dieta" : "fora da dieta"}
                </TagDescription>
              </Tag>

              <ButtonsView>
                <IconButton
                  icon='border-color'
                  description='Editar refeição'
                  onPress={() => handleEditMeal()}
                />

                <IconButton
                  type='SECONDARY'
                  icon='delete-outline'
                  description='Excluir refeição'
                  onPress={() => setIsRemoveMealModalVisible(true)}
                />
              </ButtonsView>

              <Modal
                modalText="Deseja realmente excluir o registro da refeição?"
                confirmButtonText="Sim, excluir"
                isModalVisible={isRemoveMealModalVisible}
                setModalState={setIsRemoveMealModalVisible}
                onConfirmPress={handleDeleteMeal}
              />

              <Modal
                modalText="Refeição excluída com sucesso!"
                confirmButtonText="Voltar à Home"
                isCancelButtonDisabled={true}
                isModalVisible={isRemovalSucceedModalVisible}
                setModalState={setIsRemovalSucceedModalVisible}
                onConfirmPress={handleGoToHome}
              />
            </>
          )}
        </Content>
      </Body>
    </Container>
  );
}