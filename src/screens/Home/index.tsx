import { useState } from 'react';
import { SectionList, View } from 'react-native';

import {
  Container,
  HeaderContainer,
  Logo,
  Avatar,
  Label,
  SectionTitle
} from './styles';

import { ButtonCard } from '@components/ButtonCard';
import { ButtonIcon } from '@components/ButtonIcon';
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
        {time: '16:00', description: 'Vitamina de banana com whey protein', type: 'IN_DIET'}
      ]
    },
  ]);

  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </HeaderContainer>

      <ButtonCard
        dietPercentage={90.86}
        showOpenIcon
      />

      <Label>
        Refeições
      </Label>

      <ButtonIcon
        description='Nova refeição'
        icon='add'
      />

      <SectionList
        style={{ marginTop: 32 }}
        sections={meals}
        keyExtractor={(item) => item.description}
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