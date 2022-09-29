import React from 'react'
import styled from 'styled-components';
import { Tablet, MediumDesktop,XSmall } from '../tools/responsive';
const Container = styled.div`
  padding:48px 0px;
  width:100%;
  max-width:1320px;
  max-height: 672px;
  margin: 0 auto;
  display:flex;
  flex-wrap:wrap;
  ${MediumDesktop({
    width:"95%",
  })};
  ${
    Tablet({
      maxHeight:"initial",
      width:"95%",
    })
  };
  ${XSmall({
    width:"90%"
  })}
`;
const Col = styled.div`
  flex: 0 0 auto;
  width:50%;
  padding: 0 24px;
  max-height:100%;
  ${Tablet({
    width:"100%",
    minHeight:400
  })}
`;
const Left = styled(Col)`
  display: flex;
  flex-direction:column;
`;
const LeftTitle = styled.h1`
  font-size:2.5rem;
  margin-bottom:48px;
  color:#15233C;
  font-family: "Poppins","sans-serif";
  line-height:1.2;
  font-weight:700;
 ${Tablet({
      fontSize: "calc(1.375rem + 1.5vw)"
    })}
`;
const LeftParagraph = styled.p`
  color:#696E77;
  font-size:16px;
  font-family:"Roboto", "sans-serif";
  margin-bottom:24px;
`;
const ReasonContainer = styled.div`
flex-grow:1;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  gap:16px;
`;
const ReasonBox = styled.div`
  flex: 0 0 auto; 
  width:calc(50% - 16px); 
  padding:16px;
  background-color: #F6F7FC;
  ${XSmall({
    width: "100%"
  })}
  `;
const Reason  = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction:column;
  align-items:center;
  padding:22px 16px;
  ${XSmall({
  })}
`;
const ReasonImg = styled.img`
  margin-bottom:16px;
  height:64px;
  width:64px;
`;
const ReasonTitle = styled.h5`
  font-size:1.25rem;
  font-family:"Poppins", "sans-serif";
  color: #15233C;
    margin-bottom:0;
    line-height:1.5;
    font-weight:400;
    text-align:center;
`;
const Right = styled(Col)`
margin-top:48px;
`;
const RightImage = styled.img`
  height:100%;
  width:100%;
  object-fit:cover;
`;
const Features = () => {
  const baseUrl = `${process.env.PUBLIC_URL}/assets/`
  const reasonBaseUrl = `${baseUrl}icon/icon-0`
  const endUrl = "-primary.png"
  return (
    <Container>
      <Left>
        <LeftTitle>Few Reasons Why People Choosing Us!</LeftTitle>
        <LeftParagraph>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</LeftParagraph>
        <ReasonContainer>
          <ReasonBox>
            <Reason>
              <ReasonImg src={`${reasonBaseUrl}6${endUrl}`}/>
              <ReasonTitle>Easy Process</ReasonTitle>
            </Reason>
          </ReasonBox>
          <ReasonBox>
            <Reason>
              <ReasonImg src={`${reasonBaseUrl}3${endUrl}`}/>
              <ReasonTitle>Fast Delivery</ReasonTitle>
            </Reason>
          </ReasonBox>
          <ReasonBox>
            <Reason>
              <ReasonImg src={`${reasonBaseUrl}4${endUrl}`}/>
              <ReasonTitle>Policy Controlling</ReasonTitle>
            </Reason>
          </ReasonBox>
          <ReasonBox>
            <Reason>
              <ReasonImg src={`${reasonBaseUrl}7${endUrl}`}/>
              <ReasonTitle>Money Saving</ReasonTitle>
            </Reason>
          </ReasonBox>
        </ReasonContainer>
      </Left>
      <Right>
        <RightImage src={`${baseUrl}feature/feature.jpg`}/>
      </Right>
    </Container>
  )
}

export default Features