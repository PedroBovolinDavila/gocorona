import ServicesCard from '../ServicesCard/ServicesCard';

import {
  Container,
  TextContainer,
  Title,
  Desc,
  CardContainer,
} from './styles';

import PersonIcon from '../../images/person.svg';
import MedicalIcon from '../../images/medical.svg';
import HeartIcon from '../../images/heart.svg';

function Services() {
  return (
    <Container>
      <TextContainer>
        <Title>
          <span>Healthcare</span> at your Fingertips.
        </Title>
        <Desc>
          Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.
        </Desc>
      </TextContainer>
      <CardContainer>
        <ServicesCard
          desc='Check if you are infected by COVID-19 with our Symptom Checker'
          title='Symptom Checker'
          icon={PersonIcon}
        />
        <ServicesCard
          desc='Consult with 10,000+ health workers about your concerns.'
          title='24x7 Medical support'
          icon={MedicalIcon}
        />
        <ServicesCard
          desc='Bringing premium healthcare features to your fingertips.'
          title='Conditions'
          icon={HeartIcon}
        />
      </CardContainer>
    </Container>
  )
}

export default Services;