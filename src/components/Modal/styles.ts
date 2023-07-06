import styled, { css } from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
  
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.View`
  width: 100%;
  padding: 40px 24px 28px;
  gap: 32px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
`;

export const ModalTextContainer = styled.View`
  padding: 0px 24px;
`;

export const ModalText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  text-align: center;
`;

export const ModalRow = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;

export const ModalButtonContainer = styled.View`
  flex: 1;
`;