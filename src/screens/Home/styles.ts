import styled, { css } from 'styled-components/native';

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
  margin-bottom: 36px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 50px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 40px;
  margin-bottom: 8px;
`;