import { Container, Stats, StatsTitle, Desc } from './styles';

function StatsCard() {
  return (
    <Container>
      <Stats>
        <StatsTitle>2m</StatsTitle>
        <Desc>users</Desc>
      </Stats>
      <Stats>
        <StatsTitle>78</StatsTitle>
        <Desc>countries</Desc>
      </Stats>
      <Stats>
        <StatsTitle>10,000+</StatsTitle>
        <Desc>medical experts</Desc>
      </Stats>
    </Container>
  )
}

export default StatsCard;