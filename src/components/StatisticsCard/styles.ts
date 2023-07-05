import styled from 'styled-components/native';

export type StatisticsCardTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
  type: StatisticsCardTypeStyleProps;
}

export const Container = styled.View<Props>`
  flex: 1;

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
