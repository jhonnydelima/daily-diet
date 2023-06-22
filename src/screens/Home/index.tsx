import { Container, HeaderContainer, Logo, Avatar } from './styles';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.jpeg';

import { Card } from '@components/Card';

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </HeaderContainer>

      <Card showOpenButton />

    </Container>
  );
}