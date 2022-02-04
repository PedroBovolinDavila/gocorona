import StatsCard from '../StatsCard/StatsCard';

import {
  Container,
  Wrapper,
  TextContainer,
  Title,
  Desc,
  ImageContainer,
  Image
} from './styles';
import { Button } from '../../styles/GlobalStyles';

import VideoImg from '../../images/video.svg';

function Stats() {
  return (
    <Container>
      <StatsCard />
      <Wrapper>
        <TextContainer>
          <Title>
            Talk to <span>experts.</span>
          </Title>
          <Desc>
            Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.
          </Desc>
          <Button href="#">Features</Button>
        </TextContainer>
        <ImageContainer>
          <Image src={VideoImg} />
        </ImageContainer>
      </Wrapper>
    </Container>
  )
}

export default Stats;