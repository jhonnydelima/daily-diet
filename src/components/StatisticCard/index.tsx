import { Description } from '@components/Description';

import { Container, StatisticCardTypeStyleProps } from './styles';

type Props = {
  type?: StatisticCardTypeStyleProps;
  amount: number;
  description: string;
}

export function StatisticCard({ type = 'PRIMARY', amount, description }: Props) {
  return (
    <Container type={type}>
      <Description
        title={amount.toString()}
        subtitle={description}
      />
    </Container>
  );
}