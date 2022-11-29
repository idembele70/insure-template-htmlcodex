import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF,faYoutube,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tablet, XSmall } from '../../tools/responsive';
const Container = styled.div`
  width:100%;
  max-width: 1320px;
  margin: 0 auto;
  padding:48px 12px;
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
  gap:24px;
`;
const Card = styled.div`
  max-width:324px;
  width:calc(100% / 4 - 24px);// 24px refer to the parent gap
  box-shadow: 0 0 45px rgba(0,0,0,0.07);
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
  justify-content: center;
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
    & path {
      color: #FFF;
    }

}
`;
const MediaIcon = styled(FontAwesomeIcon)`
  & path {
    color: #015FC9;
  }
`;
type TeamProps = {
  hideTitle?: boolean
}
const Team = ({hideTitle}:TeamProps) => {
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
const membersMemoized = React.useMemo(() => members.map(
  (member,idx)=>
  <Card key={idx}>
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
          <MediaIcon icon={faTwitter}/>
        </Media>
        <Media to="/">
          <MediaIcon icon={faFacebookF}/>
        </Media>
        <Media to="/">
          <MediaIcon icon={faYoutube}/>
        </Media>
        <Media to="/">
          <MediaIcon icon={faLinkedinIn}/>
        </Media>
      </MediaContainer>
    </CardBottomHover>
  </Card>
), [members,BaseUrl])
  return (
    <Container>
      {!hideTitle && <Title>Meet Our Professional Team Members</Title>}
      <CardsContainer>
        {hideTitle ? [...membersMemoized.slice(1),membersMemoized[0]]: membersMemoized}
      </CardsContainer>
    </Container>
  )
}

export default Team