import { Container, HeaderContainer, Logo, Avatar } from './styles';

import logoImg from '@assets/logo.png';

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} />

        <Avatar source={{
          uri: 'https://avatars.githubusercontent.com/u/27383569?v=4'
        }}/>
      </HeaderContainer>

      

    </Container>
  );
}