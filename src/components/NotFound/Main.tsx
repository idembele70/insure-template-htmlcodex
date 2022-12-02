import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {  PageRow } from '../home/Carousel';
import { Button} from '../home/Appointment';
import { SmallDesktop } from '../../tools/responsive';

const Container = styled(PageRow)`
  padding: 48px 12px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const Icon = styled(FontAwesomeIcon)`
  & path {
    color: #015FC9;
  }
`;
const Title = styled.h1`
  font-size:5rem;
  margin-bottom:8px;
  font-weight:700;
  ${SmallDesktop({
    fontSize: "calc(1.625rem + 4.5vw)"
  })}
`;
const SubTitle = styled.h1`
  font-size:2.5rem;
  margin-bottom:24px;
${SmallDesktop({
  fontSize: "calc(1.375rem + 1.5vw)"
})}
`;
const Paragraph = styled.p`
  color:#696E77;
  font-size:1rem;
  margin-bottom:24px;
  max-width:624px;
  text-align:center;
`;

const Main = () => {
  return (
    <Container>
      <Icon icon={faTriangleExclamation} size="6x"/>
      <Title>404</Title>
      <SubTitle>Page Not Found</SubTitle>
      <Paragraph>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</Paragraph>
      <Button>Go Back To Home</Button>
    </Container>
  )
}

export default Main