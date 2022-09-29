import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MediumDesktop, Small, Tablet, XSmall } from '../tools/responsive';
const Container = styled.div`
  margin: 48px auto;
  width:100%;
  display:flex;
  height:490px;
  ${Tablet({
    flexDirection:"column",
    width:"90%",
    height:"auto"
  })}
`;
const Col = styled.div`
  flex:1;
  `;
const Left = styled(Col)`
  background: linear-gradient(rgba(1, 95, 201, .9), rgba(1, 95, 201, .9)), url(
    ${process.env.PUBLIC_URL}/assets/slider/carousel-1.jpg
  );
  background-size: cover;
    padding: 96px 24px 96px 20%;
    ${MediumDesktop({
      paddingLeft: "10%"
    })}
    `;
const LeftTitle = styled.h1`
      color:#FFFFFF;
      font-size:2.5rem;
      margin-bottom: 24px;
      font-weight: 600;
      line-height:1.2;
  font-family: "Poppins","sans-serif";
  ${Small({
    fontSize:"2rem"
  })}
  ${XSmall({
    fontSize:"1.625rem"
  })}
    `;
    const Paragraph = styled.p`
      font-size:1rem;
      margin-bottom:48px;
      color:#F6F7FC;
  font-family: "Roboto","sans-serif";
  font-weight:400;
  line-height: 1.5;
    `;
const Right = styled(Col)`
padding: 96px 20% 96px 24px;
  background: linear-gradient(rgba(255, 255, 255, .9),rgba(255, 255, 255, .9)), url(
    ${process.env.PUBLIC_URL}/assets/slider/carousel-2.jpg
  );
  background-size: cover;
 display:flex;
 flex-wrap:wrap;
 ${MediumDesktop({
      paddingRight: "10%"
    })}
`;
const RightCol = styled.div`
  flex:0 0 auto;
  width:50%;
  ${Tablet({
    minWidth:210

  })}
`;
const RightColTitle = styled.h1`
  color: #15233c;
  font-size:3rem;
  font-family: "Poppins", "sans-serif";
  margin-bottom:8px;
  line-height:1.2;
  font-weight:700;
  ${Tablet({
    fontSize:"calc(1.425rem + 2.1vw)"
  })}
`;
const RightColParagragh = styled.h5`
  color:#015FC9;
  font-size:1.25rem;
  font-family: "Roboto", "sans-serif";
  margin-bottom:16px;
  font-weight:400;
`;
const Button = styled(Link)`
  font-size: 16px;
  line-height:1.5;
  font-weight:400;
  font-family: Roboto, "sans-serif";
  background-color:#0DD3F1;
  padding: 16px 48px;
  border-radius: 10px;
  color:#FFFFFF;
  cursor:pointer;
  text-decoration: none;
  border: 1px solid #015FC9;
  transition: all 500ms ease-in-out;
  &:hover {
    background-color: #015FC9;
  }
`;
const Facts = () => {
  return (
    <Container>
    <Left>
      <LeftTitle>For Individuals And Organisations</LeftTitle>
      <Paragraph>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</Paragraph>
    <Button to="/">More Details</Button>
    </Left>
    <Right>
      <RightCol>
        <RightColTitle>1234</RightColTitle>
        <RightColParagragh>Happy Clients</RightColParagragh>
      </RightCol>
      <RightCol>
        <RightColTitle>1234</RightColTitle>
        <RightColParagragh>Projects Succeed</RightColParagragh>
      </RightCol>
      <RightCol>
        <RightColTitle>1234</RightColTitle>
        <RightColParagragh>Awards Achieved</RightColParagragh>
      </RightCol>
      <RightCol>
        <RightColTitle>1234</RightColTitle>
        <RightColParagragh>Team Members</RightColParagragh>
      </RightCol>
    </Right>
    </Container>
  )
}

export default Facts