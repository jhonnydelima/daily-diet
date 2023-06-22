import { Container, HeaderContainer, Logo, Avatar } from './styles';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.jpeg';

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </HeaderContainer>



    </Container>
  );
}