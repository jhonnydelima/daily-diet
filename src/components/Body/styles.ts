import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
  margin-top: -8px;
  padding: 0 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
  align-items: center;
`;