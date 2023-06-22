import { Container, Title, Subtitle, DescriptionTypeStyleProps } from './styles';

type Props = {
  title: string;
  subtitle: string;
  type?: DescriptionTypeStyleProps;
}

export function Description({ title, subtitle, type = 'PRIMARY'}: Props) {
  return (
    <Container>
      <Title type={type}>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}