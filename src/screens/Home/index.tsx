import { useState } from 'react';
import { SectionList, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

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
import { MealCard } from '@components/MealCard';
import { MealCardTypeStyleProps } from '@components/MealCard/styles';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.jpeg';

type MealType = {
  date: string;
  data: {
    time: string;
    description: string;
    type: MealCardTypeStyleProps;
  }[]
}

export function Home() {
  const [meals, setMeals] = useState<MealType[]>([
    {
      date: '12.08.22',
      data: [
        {time: '20:00', description: 'X-tudo', type: 'OUT_OF_DIET'},
        {time: '16:00', description: 'Mingau de aveia com banana e pasta de amendoim', type: 'IN_DIET'},
        {time: '12:30', description: 'Salada cesar com frango', type: 'IN_DIET'},
        {time: '9:00', description: 'Ovos mexidos com pão e uma dose de whey', type: 'IN_DIET'},
      ]
    },
    {
      date: '11.08.22',
      data: [
        {time: '20:00', description: 'X-tudo', type: 'OUT_OF_DIET'},
        {time: '16:00', description: 'Mingau de aveia com banana e pasta de amendoim', type: 'IN_DIET'},
        {time: '12:30', description: 'Salada cesar com frango', type: 'IN_DIET'},
        {time: '9:00', description: 'Ovos mexidos com pão e uma dose de whey', type: 'IN_DIET'},
      ]
    },
  ]);

  const navigation = useNavigation();

  function handleOpenSummary() {
    navigation.navigate('summary');
  }

  function handleOpenNewMeal() {
    navigation.navigate('new');
  }

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

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.description + index}
        renderItem={({item}) => (
          <MealCard
            type={item.type}
            time={item.time}
            description={item.description}
          />
        )}
        renderSectionHeader={({ section: {date} }) => (
          <SectionTitle>{date}</SectionTitle>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ marginBottom: 12 }} />
        )}
      />
    </Container>
  );
}