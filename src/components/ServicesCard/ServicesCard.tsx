import { Container, Icon, TextContainer, Title, Desc } from './styles';

interface Props {
  title: string;
  desc: string;
  icon: string;
}

function ServicesCard({ title, desc, icon }: Props) {
  return (
    <Container>
      <Icon src={icon} />
      <TextContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </TextContainer>
    </Container>
  )
}

export default ServicesCard;