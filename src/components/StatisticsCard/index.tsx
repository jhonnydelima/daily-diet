import { Description } from '@components/Description';

import { Container, StatisticsCardTypeStyleProps } from './styles';

type Props = {
  type?: StatisticsCardTypeStyleProps;
  amount: number;
  description: string;
}

export function StatisticsCard({ type = 'PRIMARY', amount, description }: Props) {
  return (
    <Container type={type}>
      <Description
        type='SECONDARY'
        title={amount.toString()}
        subtitle={description}
      />
    </Container>
  );
}