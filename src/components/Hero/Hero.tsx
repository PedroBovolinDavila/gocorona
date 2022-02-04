import HeroImg from '../../images/hero.svg';

import { Container, TextContainer, Title, Desc, ImageContainer, Image } from './styles';
import { Button } from '../../styles/GlobalStyles';

function Hero() {
  return (
    <Container>
      <TextContainer>
        <Title>
          Take care of yours <br /> family's <span>health.</span>
        </Title>
        <Desc>
          All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.
        </Desc>
        <Button href='#'>Get Started</Button>
      </TextContainer>
      <ImageContainer>
        <Image src={HeroImg} />
      </ImageContainer>
    </Container>
  )
}

export default Hero;