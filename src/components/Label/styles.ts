import styled, { css } from 'styled-components/native';

export const TextLabel = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;