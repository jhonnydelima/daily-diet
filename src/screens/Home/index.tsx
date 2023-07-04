import { useState, useCallback } from 'react';
import { SectionList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
  Container,
  HeaderContainer,
  Logo,
  Avatar,
  Label,
  SectionTitle
} from './styles';

import { CardButton } from '@components/CardButton';
import { IconButton } from '@components/IconButton';
import { Loading } from '@components/Loading';
import { MealCard } from '@components/MealCard';

import { mealGetAll } from '@storage/meal/mealGetAll';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { generate } from '@utils/SectionListGenerator';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.jpeg';

type MealType = {
  date: string;
  data: MealStorageDTO[];
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealType[]>([]);

  const navigation = useNavigation();

  function handleOpenSummary() {
    navigation.navigate('summary');
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

      const sectionListData = generate(data);

      setMeals(sectionListData);
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
        onPress={handleOpenSummary}
        dietPercentage={90.86}
        showOpenIcon
      />

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