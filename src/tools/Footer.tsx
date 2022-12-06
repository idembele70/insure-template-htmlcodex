import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faLocationDot, faPhone, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, LogoContainer, Title } from './Header';
import { Button } from '../components/home/Carousel';
import { Small, Tablet } from './responsive';
const Container = styled.div`
  margin-top: 48px;
  padding: 48px 12px 0;
  background-color: #15233C;
`;
const Wrapper = styled.div`
  width:95%;
  padding: 48px 0;
  max-width:1320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  color:#A7A8B4;
  font-size: 1rem;
  font-family:"Roboto", "sans-serif";
  margin: 48px 0 0;
  padding: 0 24px;
  width:25%;
  ${Tablet({
    width:"50%"
  })}
  ${Small({
    width:"100%"
  })}
`;
const FooterLogoContainer = styled.div`
display: inline-flex;
align-items: center;
gap: 16px;
margin-bottom: 24px;
`;
const FooterLogo = styled(Logo)`
height:64px;
width:64px;
`
const FooterTitle = styled(Title)`
  color:#FFF;
`;
const Paragraph = styled.p`
  color: #A7A8B4;
  font-size: 1rem;
  margin-bottom:16px;
`;
const SocialContainer = styled.div`
  display:flex;
`;
const IconContainer = styled(Link)`
  height:38px;
  width:38px;
  border: 1px solid #A7A8B4;
  border-radius: 10px;
  margin-right: 4px;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  & path {
    transition: all 500ms ease-in-out;
    color: #A7A8B4;
  }
  &:hover {
    border-color: #F6F7FC;
    & path {
      color: #0DD3F1;
    }
  }
`;
const ColTitle = styled.h5`
  color: #F6F7FC;
  font-family: "Poppins", "sans-serif";
  margin-bottom:24px;
  line-height:1.2;
`;
const AddressParagraph = styled(Paragraph)`
  margin-bottom:16px;
  color: #A7A8B4;
  `;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
margin-right:16px;
  & path {
    color: #A7A8B4;
  }
  `;
const QuickLinkIcon = styled(FontAwesomeIcon)`
margin-right:10px;
  & path {
    color: #A7A8B4;
  }
  
`;
const QuickLinkRow = styled(Link)`
  display:block;
  margin-bottom:5px;
  color: #A7A8B4;
  cursor:pointer;
  text-decoration: none;
  line-height: 1.5;
  user-select:none;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: all 300ms ease;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(1 95 201 / 25%);
  }
  &:hover {
    box-shadow:none;
    & > p {
      letter-spacing: 1px;
      color:#F6F7FC;
    }
  }
`;
const QuickLinkText = styled(Paragraph)`
    display:inline;
    transition: all 300ms ease-in-out;
`;
const InputContainer = styled.div`
  position:relative;
  margin:0 auto;
  max-width:400px;
`;
const Input = styled.input`
background-color: transparent;
  border: 1px solid #CED4DA;
  font-size:1rem;
  font-weight:400;
  line-height:1.5;
  color: #696e77;
  border-radius:10px;
  transition: all 150ms ease-in-out;
  padding: 16px 48px 16px 24px ;
  width:100%;
  &:focus {
    outline:0;
    box-shadow: 0 0 0 0.25rem rgb(1 95 201 / 25%);
    border-color:#80afe4;
  }
`;
const FooterButton = styled.button`
    padding: 8px 12px;
    margin-top: 8px;
    margin-right: 8px;
    right: 0px;
    top:0px;
    background-color:#0DD3F1;
    cursor:pointer;
    border:none;
    border-radius:10px;
    color:#FFF;
    transition: all 150ms ease-in-out;
    position:absolute;
    &:hover {
      background-color:#015FC9;
    }
`;
const CopyrightContainer = styled.div`
width: 100%;
border-top: 1px solid rgba(256, 256, 256, 0.1);
padding: 25px 0;
`
const CopyrightWrapper = styled.div`
  width:95%;
  max-width:1320px;
  margin: 0 auto;
  display: flex;
  ${
    Small({
      flexDirection: "column",
    })
  }
`;
const CopyrightCol = styled.div`
padding: 0 24px;
  color:#A7A8B4;
  flex:1;
`;
const CopyrightLeftCol = styled(CopyrightCol)`
  ${
      Small({
        textAlign: "center",
      })
  }
  margin-bottom:16px;
`
const CopyrightRightCol = styled(CopyrightCol)`
text-align:end;
${
      Small({
        textAlign: "center",
      })
  }
`
const CopyrightLink = styled(Link)`
  color:#0DD3F1;
  font-size:0.9375rem;
  font-family: "Roboto", "sans-serif";
  font-weight:400;
  text-decoration:none;
  line-height:1.5;
  &:hover {
    color: #FFFFFF;
  }

`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Col>
        <FooterLogoContainer>
        <FooterLogo src={`${process.env.PUBLIC_URL}/assets/icon/icon-02-light.png`}/>
        <FooterTitle>Insure</FooterTitle>
        </FooterLogoContainer>
        <Paragraph>
        Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
        </Paragraph>
        <SocialContainer>
        <IconContainer to="/">
          <FontAwesomeIcon icon={faTwitter}/>
        </IconContainer>
        <IconContainer to="/">
          <FontAwesomeIcon icon={faFacebookF}/>
        </IconContainer>
        <IconContainer to="/">
          <FontAwesomeIcon icon={faYoutube}/>
        </IconContainer>
        <IconContainer to="/">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </IconContainer>
        </SocialContainer>
        </Col>
        <Col>
        <ColTitle>Address</ColTitle>
        <AddressParagraph>
          <StyledFontAwesomeIcon icon={faLocationDot}/>
          123 Street, New York, USA
        </AddressParagraph>
        <AddressParagraph>
          <StyledFontAwesomeIcon icon={faPhone}/>
          +012 345 67890
        </AddressParagraph>
        <AddressParagraph>
          <StyledFontAwesomeIcon icon={faEnvelope}/>
          info@example.com
        </AddressParagraph>
        </Col>
        <Col>
        <ColTitle>Quick Links</ColTitle>
        <QuickLinkRow to="/about">
          <QuickLinkIcon icon={faChevronRight}/>
          <QuickLinkText>About Us</QuickLinkText>
        </QuickLinkRow>
        <QuickLinkRow to="/contact">
          <QuickLinkIcon icon={faChevronRight}/>
          <QuickLinkText>Contact Us</QuickLinkText>
        </QuickLinkRow>
        <QuickLinkRow to="/service">
          <QuickLinkIcon icon={faChevronRight}/>
          <QuickLinkText>Our Services</QuickLinkText>
        </QuickLinkRow>
        <QuickLinkRow to="/">
          <QuickLinkIcon icon={faChevronRight}/>
          <QuickLinkText>Terms & Condition</QuickLinkText>
        </QuickLinkRow>
        <QuickLinkRow to="/">
          <QuickLinkIcon icon={faChevronRight}/>
          <QuickLinkText>Support</QuickLinkText>
        </QuickLinkRow>
          </Col>
        <Col>
        <ColTitle>Newsletter</ColTitle>
        <Paragraph>Dolor amet sit justo amet elitr clita ipsum elitr est.</Paragraph>
        <InputContainer>
        <Input type="text" placeholder='Your email'/>
        <FooterButton>SignUp</FooterButton>
        </InputContainer>
          </Col>
      </Wrapper>
    <CopyrightContainer>
      <CopyrightWrapper>
        <CopyrightLeftCol>&copy; <CopyrightLink to="/">Your Site Name</CopyrightLink>, All Right Reserved.</CopyrightLeftCol>
        <CopyrightRightCol>Designed By <CopyrightLink to="/">HTML Codex</CopyrightLink></CopyrightRightCol>
      </CopyrightWrapper>
    </CopyrightContainer>
    </Container>
  )
}

export default Footer