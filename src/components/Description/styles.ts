import styled, { css } from 'styled-components/native';

export type DescriptionTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: DescriptionTypeStyleProps;
}

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${type === 'PRIMARY' ? theme.FONT_SIZE.XXL : theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
`;