import { Container, Title, Row } from './styles';

import { Body } from '@components/Body';
import { Description } from '@components/Description';
import { Header } from '@components/Header';
import { SummaryCard } from '@components/SummaryCard';

export function Summary() {
  return (
    <Container>
      <Header
        backgroundType='PRIMARY'
        iconType='PRIMARY'
      >
        <Description
          title={(90.86).toString().replace('.', ',') + '%'}
          subtitle='das refeições dentro da dieta'
        />
      </Header>

      <Body>
        <Title>
          Estatísticas gerais
        </Title>

        <Row>
          <SummaryCard
            type='TERTIARY'
            amount={22}
            description='melhor sequência de pratos dentro da dieta'
          />
        </Row>

        <Row>
          <SummaryCard
            type='TERTIARY'
            amount={109}
            description='refeições registradas'
          />
        </Row>

        <Row>
          <SummaryCard
            amount={99}
            description='refeições dentro da dieta'
          />

          <SummaryCard
            type='SECONDARY'
            amount={10}
            description='refeições fora da dieta'
          />
        </Row>
      </Body>
    </Container>
  );
}