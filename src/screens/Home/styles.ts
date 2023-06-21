import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 50%;
`;