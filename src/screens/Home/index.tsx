import { Container, HeaderContainer, Logo, Avatar, Label } from './styles';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.jpeg';

import { ButtonCard } from '@components/ButtonCard';
import { ButtonIcon } from '@components/ButtonIcon';

export function Home() {
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

    </Container>
  );
}