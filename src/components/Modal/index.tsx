import { Alert, Modal as Container } from 'react-native';

import { IconButton } from '@components/IconButton';

import {
  ModalContainer,
  ModalContent,
  ModalTextContainer,
  ModalText,
  ModalRow,
  ModalButtonContainer
} from './styles';

type Props = {
  modalText: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  isCancelButtonDisabled?: boolean;
  isModalVisible: boolean;
  setModalState: (value: boolean) => void;
  onConfirmPress: () => void;
}

export function Modal({
  modalText,
  cancelButtonText = 'Cancelar',
  confirmButtonText = 'Sim',
  isCancelButtonDisabled = false,
  isModalVisible,
  setModalState,
  onConfirmPress
}: Props) {
  return (
    <Container
      animationType="fade"
      transparent
      visible={isModalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalState(false);
      }}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTextContainer>
            <ModalText>
              {modalText}
            </ModalText>
          </ModalTextContainer>

          <ModalRow>
            {!isCancelButtonDisabled && (
              <ModalButtonContainer>
                <IconButton
                  type="SECONDARY"
                  description={cancelButtonText}
                  onPress={() => setModalState(false)}
                />
              </ModalButtonContainer>
            )}
            
            <ModalButtonContainer>
              <IconButton
                description={confirmButtonText}
                onPress={() => onConfirmPress()}
              />
            </ModalButtonContainer>
          </ModalRow>
        </ModalContent>
      </ModalContainer>
    </Container>
  );
}