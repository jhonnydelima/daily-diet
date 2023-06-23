import styled from 'styled-components/native';

export type SummaryCardTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
  type: SummaryCardTypeStyleProps;
}

export const Container = styled.View<Props>`
  width: 100%;

  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;

  background-color: ${
    ({ theme, type }) => (
      type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT :
      type === 'SECONDARY' ? theme.COLORS.RED_LIGHT :
      theme.COLORS.GRAY_600
    )
  };
`;
