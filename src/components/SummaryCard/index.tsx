import { Description } from '@components/Description';

import { Container, SummaryCardTypeStyleProps } from './styles';

type Props = {
  type?: SummaryCardTypeStyleProps;
  amount: number;
  description: string;
}

export function SummaryCard({ type = 'PRIMARY', amount, description }: Props) {
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