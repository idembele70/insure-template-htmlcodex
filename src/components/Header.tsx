import React from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone,faEnvelopeOpen,faClock} from '@fortawesome/free-solid-svg-icons'
const Top = styled.div`
  height: 40px;
  padding: 8px 48px;
  width: 100%;
  background-color: #15233C;
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
`;
const TopLeftRowText = styled.small`
  font-size: 0.875em;
`;
const StyledIcon = styled(({component, ...props})=>React.cloneElement(component, props))
const Header = () => {
  return (
    <div>
      <Top>
        <TopLeft>
          <TopLeftRow>
            <FontAwesomeIcon icon={faPhone} size="sm" style={{marginRight:8}}  />
            <TopLeftRowText>+012 345 6789</TopLeftRowText>
          </TopLeftRow>
          <TopLeftRow>
            <FontAwesomeIcon icon={faEnvelopeOpen} size="sm" />
            <TopLeftRowText>info@example.com</TopLeftRowText>
          </TopLeftRow>
          <TopLeftRow>
            <FontAwesomeIcon icon={faClock} size="sm"/>
            <TopLeftRowText>Mon - Fri: 09 AM - 09 PM
            `</TopLeftRowText>
          </TopLeftRow>
        </TopLeft>
      </Top>
    </div>
  )
}

export default Header