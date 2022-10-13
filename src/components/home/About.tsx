import React from 'react'
import styled from 'styled-components';
import { Tablet, XSmall } from '../../tools/responsive';
const Container = styled.div`
  width:100%;
  max-width:1320px;
  padding: 48px 12px;
  display:flex;
  flex-wrap:wrap;
  margin-left:auto;
  margin-right:auto;
  ${
    Tablet({
      justifyContent:"center"
    })
  }
`;
const Row = styled.div`
flex:1;
padding: 0 24px;
color:#696E77;
margin-top:48px;
min-width:475px;
min-height:400px;
${Tablet({maxWidth:744})}
${XSmall({minWidth:"90%"})}
`;
const Left = styled(Row)`
  position:relative;
`;
const LeftTopBox = styled.div`
  height:200px;
  width:200px;
  background-color:white;
  border-bottom-right-radius:10px;
  position:absolute;
  top:0;
  left:16px;
  padding-right:16px;
  padding-bottom:16px;
`;
const LeftTopBoxChild = styled.div`
  padding:16px;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: #015FC9;
  border-radius: 10px;
  color: #FFFFFF;
  `;
const BoxTitle = styled.h1`
 font-size:2.5rem;
 line-height:1.2;
 margin-bottom:0;
 font-weight: 600;
 font-family:"Poppins", sans-serif;
 `;
const BoxSubTitle = styled.h2`
font-family:"Roboto", sans-serif;
font-size:2rem;
font-weight:600;
line-height:1.5;
`;
const BoxText = styled.h5`
  font-family:"Roboto", sans-serif;
  font-size:1.25rem;
  font-weight:600;
`;
const LeftImage = styled.img`
  width:80%;
  height:90%;
  object-fit:cover;
  object-position: 0px 32px;
  position: absolute;
  bottom:0;
  right:24px; // padding right of the parent is 24px
  border-bottom-right-radius: 10px;
 
`;
const Right = styled(Row)`
`;
const Title = styled.h1`
  color:#15233C;
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 48px;
  font-weight: 700;
  line-height: 1.2;
`;
const Intro = styled.p`
color: #015FC9;
font-size: 1.25rem;
font-family:"Roboto", sans-serif;
margin-bottom:24px;
`
const Info = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  margin-bottom:24px;
  row-gap:24px;
  `;
const InfoCol = styled.div`
  display:flex;
  align-items:center;
`;
const InfoImg = styled.img`
  margin-right: 16px;
  height: 64px;
  width:64px;
`;
const InfoTitle = styled.h5`
  color:#15233C;
  font-size:1.25rem;
  font-family:"Poppins", sans-serif;
  margin-bottom: 0;
  line-height: 1.2;
  font-weight: 600;
  max-width:175px;
  `
  const Description = styled.p`
    font: 16px "Roboto", sans-serif;
    margin-bottom:24px;
  `;
  const Hr = styled.hr`
  `;
  const ContactInfoRow = styled(InfoCol)`
  padding-top:24px;
  `;
  const ContactImg = styled.img`
  height:45px;
  width:45px;
  margin-right:16px;
    border-radius: 50%;
  `;
  const ContactPhone = styled(InfoTitle)`
    max-width:initial;
  `;
const About = () => {
  const publicUrl = `${process.env.PUBLIC_URL}/assets/`
  const imgBaseUrl = `${publicUrl}/icon/icon-0`
  return (
    <Container>
      <Left>
        <LeftImage src={`${publicUrl}/about/about.jpg`}/>
        <LeftTopBox>
          <LeftTopBoxChild>
            <BoxTitle>25</BoxTitle>
            <BoxSubTitle>Years</BoxSubTitle>
            <BoxText>Experience</BoxText>
          </LeftTopBoxChild>
        </LeftTopBox>
      </Left>
      <Right>
        <Title>We're Here To Assist You With Exploring Protection</Title>
        <Intro>Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</Intro>
        <Info>
          <InfoCol>
            <InfoImg src={`${imgBaseUrl}4-primary.png`}/>
          <InfoTitle>Flexible Insurance Plans</InfoTitle>
          </InfoCol>
          <InfoCol>
            <InfoImg src={`${imgBaseUrl}3-primary.png`}/>
          <InfoTitle>Money Back Guarantee</InfoTitle>
          </InfoCol>
        </Info>
<Description>
Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
</Description>
      <Hr/>
      <ContactInfoRow>
        <ContactImg src={`${publicUrl}/about/profile.jpg`}/>
        <ContactPhone>Call Us: +012 345 6789</ContactPhone>
      </ContactInfoRow>
      </Right>
    </Container>
  )
}

export default About