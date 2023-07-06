import { useState, useCallback } from 'react';
import { SectionList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
  Container,
  HeaderContainer,
  Logo,
  Avatar,
  CardButton,
  OpenIcon,
  Label,
  SectionTitle
} from './styles';

import { Description } from '@components/Description';
import { IconButton } from '@components/IconButton';
import { Loading } from '@components/Loading';
import { MealCard } from '@components/MealCard';

import { mealGetAll } from '@storage/meal/mealGetAll';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { MealSectionListGenerator } from '@utils/MealSectionListGenerator';
import { StatisticsGenerator } from '@utils/StatisticsGenerator';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.jpeg';

type MealType = {
  date: string;
  data: MealStorageDTO[];
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealType[]>([]);
  const [dietPercentage, setDietPercentage] = useState(0);
  const cardButtonType = dietPercentage > 50 ? 'PRIMARY' : 'SECONDARY';

  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate('statistics');
  }

  function handleOpenNewMeal() {
    navigation.navigate('new');
  }

  function handleOpenMeal(id: string) {
    navigation.navigate('meal', { id })
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const data = await mealGetAll();

      const sectionListGenerator = new MealSectionListGenerator(data);
      setMeals(sectionListGenerator.generate());

      const statistics = new StatisticsGenerator(data);
      setDietPercentage((statistics.mealsInDiet * 100) / data.length);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </HeaderContainer>

      <CardButton
        type={cardButtonType}
        onPress={handleOpenStatistics}
      >
        <OpenIcon type={cardButtonType} />

        <Description
          title={dietPercentage.toFixed(2).replace('.', ',') + '%'}
          subtitle='das refeições dentro da dieta'
        />
      </CardButton>

      <Label>
        Refeições
      </Label>

      <IconButton
        onPress={handleOpenNewMeal}
        description='Nova refeição'
        icon='add'
      />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={meals}
          keyExtractor={(item, index) => item.description + index}
          renderItem={({item}) => (
            <MealCard
              type={item.type}
              time={item.time}
              description={item.name}
              onPress={() => handleOpenMeal(item.id)}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <SectionTitle>{date}</SectionTitle>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ marginBottom: 12 }} />
          )}
        />
      )}
    </Container>
  );
}