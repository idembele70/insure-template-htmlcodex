import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF,faYoutube,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tablet, XSmall } from '../../tools/responsive';
const Container = styled.div`
  width:100%;
  padding:48px 12px;
  margin:48px 0;
`;
const Title = styled.h1`
  max-width: 500px;
  text-align: center;
  font-weight: 700;
  margin:0 auto 48px;
`;
const CardsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap:16px;
`;
const Card = styled.div`
  max-width:324px;
  width:calc(100% / 4 - 16px);// 16px refer to the parent gap
  border-radius:10px;
  overflow:hidden;
  position:relative;
  &:hover {
    & > img {
      transform: scale(1.1);
    }
    & > div:first-of-type{ // CardBottom
      opacity:0;
    }
    & > div:last-child { // CardBottomHover
      opacity:1;
      transform:translateY(-38px)
    }
  }
  ${
    Tablet({
      width:"calc(50% - 16px)"
    })
  }
  ${
    XSmall({
      width:"100%"
    })
  }
  `;
const CardImage = styled.img`
width: 100%;
display:block;
transition: transform 500ms ease-in-out;
border-radius:10px;
  `;
const CardBottom = styled.div`
  padding:24px;
  text-align: center;
  transition: opacity 150ms ease-in-out;
  `;
const CardBottomHover = styled(CardBottom)`
  transition: all 500ms ease-in-out;
  position:absolute;
  left:0;
  right:0;
  bottom:-38px; // height of media Container
  opacity:0;
  background-color: #FFF;
  `;
const CardTitle = styled.h5`
  margin-bottom: 8px;
  font-family: "Poppins", "sans-serif";
  line-height: 1.2;
  color:#15233C;
`;
const CardSubTitle = styled.p`
  font-size:1rem;
  color:#696E77;
`;
const MediaContainer = styled.div`
  display:flex;
  gap:8px;
  flex-wrap:wrap;
`;
const Media = styled(Link)`
  background-color:#F6F7FC;
  color:#015FC9;
  width:38px;
  height:38px;
  border-radius: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  transition:all 350ms ease-in-out;
  &:hover {
    color:#FFF;
    background-color:#015FC9;
}
`;
const Team = () => {
  interface Members {
    img:string;
    name:string;
    designation:string;
  }
  const members:Members[] = React.useMemo(() =>[
    {
    img:"1",
    name:"Full Name",
    designation:"Designation"
  },
    {
    img:"2",
    name:"Full Name",
    designation:"Designation"
  },
    {
    img:"3",
    name:"Full Name",
    designation:"Designation"
  },
    {
    img:"4",
    name:"Full Name",
    designation:"Designation"
  },
] , [])
const BaseUrl = `${process.env.PUBLIC_URL}/assets/team/team-`
  return (
    <Container>
      <Title>Meet Our Professional Team Members</Title>
      <CardsContainer>
        {members.map(
          member=>
          <Card>
            <CardImage src={`${BaseUrl}${member.img}.jpg`}/>
            <CardBottom>
              <CardTitle>{member.name}</CardTitle>
              <CardSubTitle>{member.designation}</CardSubTitle>
              </CardBottom>
            <CardBottomHover>
              <CardTitle>{member.name}</CardTitle>
              <CardSubTitle>{member.designation}</CardSubTitle>
              <MediaContainer>
                <Media to="/">
                  <FontAwesomeIcon icon={faTwitter}/>
                </Media>
                <Media to="/">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </Media>
                <Media to="/">
                  <FontAwesomeIcon icon={faYoutube}/>
                </Media>
                <Media to="/">
                  <FontAwesomeIcon icon={faLinkedinIn}/>
                </Media>
              </MediaContainer>
            </CardBottomHover>
          </Card>
        )}
      </CardsContainer>
    </Container>
  )
}

export default Team