import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  ButtonsView,
  ModalContainer,
  ModalContent,
  ModalTextContainer,
  ModalText,
  ModalRow,
  ModalButtonContainer
} from './styles';

type RouteParams = {
  type: 'IN_DIET' | 'OUT_OF_DIET' | undefined;
}

export function Meal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { type } = route.params as RouteParams;

  function handleEditMeal() {
    navigation.navigate('edit');
  }

  function handleDeleteMeal() {

  }

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
              onPress={() => handleEditMeal()}
            />

            <IconButton
              type='SECONDARY'
              icon='delete-outline'
              description='Excluir refeição'
              onPress={() => setIsModalVisible(true)}
            />
          </ButtonsView>

          <Modal
            animationType='fade'
            transparent
            visible={isModalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setIsModalVisible(false);
            }}
          >
            <ModalContainer>
              <ModalContent>
                <ModalTextContainer>
                  <ModalText>
                    Deseja realmente excluir o registro da refeição?
                  </ModalText>
                </ModalTextContainer>

                <ModalRow>
                  <ModalButtonContainer>
                    <IconButton
                      type='SECONDARY'
                      description='Cancelar'
                      onPress={() => setIsModalVisible(false)}
                    />
                  </ModalButtonContainer>
                  
                  <ModalButtonContainer>
                    <IconButton
                      description='Sim, excluir'
                      onPress={() => handleDeleteMeal}
                    />
                  </ModalButtonContainer>
                </ModalRow>
              </ModalContent>
            </ModalContainer>
          </Modal>
        </Content>
      </Body>
    </Container>
  );
}