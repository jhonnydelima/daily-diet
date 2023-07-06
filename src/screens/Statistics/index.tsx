import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { Body } from '@components/Body';
import { Description } from '@components/Description';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import { StatisticsCard } from '@components/StatisticsCard';
import { mealGetAll } from '@storage/meal/mealGetAll';
import { StatisticsGenerator } from '@utils/StatisticsGenerator';

import { Container, Title, Row } from './styles';

export function Statistics() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsInDiet, setMealsInDiet] = useState(0);
  const [mealsOutOfDiet, setMealsOutOfDiet] = useState(0);
  const [longestSequenceInDiet, setLongestSequenceInDiet] = useState(0);
  const totalMeals = mealsInDiet + mealsOutOfDiet;
  const headerType = mealsInDiet > mealsOutOfDiet ? 'PRIMARY' : 'SECONDARY';
  const percentageInDiet = (mealsInDiet * 100) / totalMeals;

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const statistics = new StatisticsGenerator(await mealGetAll());

      setMealsInDiet(statistics.mealsInDiet);
      setMealsOutOfDiet(statistics.mealsOutOfDiet);
      setLongestSequenceInDiet(statistics.getLongestSequenceInDiet());
    } catch (error) {
      Alert.alert("Estatísticas", "Não foi possível carregar estatísticas.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, [])

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header
            backgroundType={headerType}
            iconType={headerType}
          >
            <Description
              title={percentageInDiet.toFixed(2).replace('.', ',') + '%'}
              subtitle='das refeições dentro da dieta'
            />
          </Header>

          <Body>
            <Title>
              Estatísticas gerais
            </Title>

            <Row>
              <StatisticsCard
                type='TERTIARY'
                amount={longestSequenceInDiet}
                description='melhor sequência de pratos dentro da dieta'
              />
            </Row>

            <Row>
              <StatisticsCard
                type='TERTIARY'
                amount={totalMeals}
                description='refeições registradas'
              />
            </Row>

            <Row>
              <StatisticsCard
                amount={mealsInDiet}
                description='refeições dentro da dieta'
              />

              <StatisticsCard
                type='SECONDARY'
                amount={mealsOutOfDiet}
                description='refeições fora da dieta'
              />
            </Row>
          </Body>
        </>
      )}
    </Container>
  );
}