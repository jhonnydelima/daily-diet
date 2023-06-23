import { View } from 'react-native';
import { Container, Content, Title } from './styles';

import { Description } from '@components/Description';
import { Header } from '@components/Header';
import { SummaryCard } from '@components/SummaryCard';

export function Summary() {
  return (
    <>
      <Container>
        <Header />

        <Description
          title={(90.86).toString().replace('.', ',') + '%'}
          subtitle='das refeições dentro da dieta'
        />
      </Container>

      <Content>
        <Title>
          Estatísticas gerais
        </Title>

        <SummaryCard
          type='TERTIARY'
          amount={22}
          description='melhor sequência de pratos dentro da dieta'
        />

        <SummaryCard
          type='TERTIARY'
          amount={109}
          description='refeições registradas'
        />

        {/* <View style={{ flexDirection: 'row' }}> */}
          <SummaryCard
            amount={99}
            description='refeições dentro da dieta'
          />

          <SummaryCard
            type='SECONDARY'
            amount={10}
            description='refeições fora da dieta'
          />
        {/* </View> */}
      </Content>
    </>
  );
}