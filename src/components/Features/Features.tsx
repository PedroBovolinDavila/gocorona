import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Desc
} from './styles';
import { Button } from '../../styles/GlobalStyles';

import PhoneImg from '../../images/phone.svg';

function Features() {
  return (
    <Container>
      <ImageContainer>
        <Image src={PhoneImg} />
      </ImageContainer>
      <TextContainer>
        <Title>
          Stay safe with <br /> Go<span>Corona.</span>
        </Title>
        <Desc>
          24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.
        </Desc>
        <Button href='#'>Features</Button>
      </TextContainer>
    </Container>
  )
}

export default Features;