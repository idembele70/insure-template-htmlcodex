import React from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone,faEnvelopeOpen,faClock} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Tablet } from '../tools/responsive';

const Container = styled.div`
`;
const Top = styled.div`
display: inline-flex;
padding: 8px 48px;
align-items: center;
justify-content: space-between;
  height: 40px;
  width: 100%;
  background-color: #15233C;
  ${Tablet({display:"none"})}
`;
const TopLeft = styled.div`
 height: 100%;
  display: flex;
  gap: 28px;
`;
const TopLeftRow = styled.div`
  display: inline-flex;
  align-items:center;
  color: rgba(255, 255, 255, 0.502);
  gap: 8px;
`;
const TopLeftRowText = styled.small`
  font-size: 0.875em;
`;

const TopRight = styled.div`
 height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;
const TopRightIcon = styled(FontAwesomeIcon)`
  color: rgba(255, 255, 255, 0.502);

`
const Bottom = styled.div`
  padding: 8px 48px;
  display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;
const Title = styled.h1`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  color: #15233C;
  font-weight: 500;
`;
const Logo = styled.img`
  height: 60px;
  ${Tablet({height:45})}
`;

const Nav = styled.nav`
  display: inline-flex;
  gap: 24px;
  background-color: #F6F7FC;
  border-radius: 5px;
  padding: 8px 16px;
`;
interface NavItemProps {
  isActive?: boolean
}
const NavItem = styled.a<NavItemProps>`
  color:#${({ isActive }) => isActive ? "275FC9": "696E77"};
  transition: 500ms color ease-in;
  cursor: pointer;
  &:hover {
    color:#275FC9;
  }
`;
const BottonRightButton = styled.a`
  border-radius: 5px;
  color: #DFEBF8;
  background-color: #275FC9;
  padding: 6px 16px;
  line-height: 1.5;
  font-weight: 400;
  border: 1px solid transparent;
  cursor:pointer;
  user-select: none;
  font-size:16px;
`;

const Header = () => {
  return (
    <Container>
      <Top>
        <TopLeft>
          <TopLeftRow>
            <FontAwesomeIcon icon={faPhone} size="sm"  />
            <TopLeftRowText>+012 345 6789</TopLeftRowText>
          </TopLeftRow>
          <TopLeftRow>
            <FontAwesomeIcon icon={faEnvelopeOpen} size="sm" />
            <TopLeftRowText>info@example.com</TopLeftRowText>
          </TopLeftRow>
          <TopLeftRow>
            <FontAwesomeIcon icon={faClock} size="sm"/>
            <TopLeftRowText>Mon - Fri: 09 AM - 09 PM
            </TopLeftRowText>
          </TopLeftRow>
        </TopLeft>
        <TopRight>
          <TopRightIcon icon={faFacebookF}/> 
          <TopRightIcon icon={faTwitter}/> 
          <TopRightIcon icon={faLinkedin}/> 
          <TopRightIcon icon={faInstagram}/> 
        </TopRight>
      </Top>
      <Bottom>
        <Title>
      <Logo src={`${process.env.PUBLIC_URL}/assets/icon/icon-02-primary.png`}/>
        Insure </Title>
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Our Services</NavItem>
          <NavItem>Pages</NavItem>
          <NavItem>Contact Us</NavItem>
        </Nav>
        <BottonRightButton>Get A Quote</BottonRightButton>
      </Bottom>
    </Container>
  )
}

export default Header