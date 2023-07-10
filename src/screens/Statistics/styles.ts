import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  width: 100%;
  text-align: center;

  margin-top: 32px;
  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
`;