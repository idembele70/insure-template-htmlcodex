import React from 'react'
import styled from 'styled-components';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider, { Settings} from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Small, MediumDesktop, SmallDesktop, Tablet } from '../tools/responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
position:relative;
margin-bottom: 48px;
// using flex put automaticaly the slide Component height to 100% of his parent
& .slick-slide > div {
    display: flex;
}
`;
const Slide = styled.div`
  position: relative;
  min-height:450px;
`;
const InformationContainer = styled.div`
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  display: flex;
  align-items: center;
`;
const InformationWrapper = styled.div`
width:90vw;
max-width: 1320px;
margin-left: auto;
margin-right: auto;
${MediumDesktop({
  width:"75vw",
})}
${Tablet({
  width:"90vw",
})}

`;
const Information = styled.div`
display:flex;
flex-direction: column;
justify-content:flex-start;
align-items: start;
  max-width: 660px;
  ${SmallDesktop({
    maxWidth: 456
  })}
  ${Tablet({
    maxWidth:"90%"
  })}
`;
const Title = styled.h1`
  font-size:64px;
  line-height: 76.8px;
  font-family: "Poppins", "sans-serif";
  color: #15233C;
  font-weight: 700;
  margin-bottom:24px;
  ${SmallDesktop({
    fontSize:"4rem",
    lineHeight:1.2
  })}
  ${Tablet({
    fontSize:"3rem"
  })}
  ${
    Small({
      fontSize:"calc(1.525rem + 3.3vw)"
    })
  }
`;
const Description = styled.p`
  font-size:20px;
  color: #696E77;
  font-family: Roboto, "sans-serif";
  margin-bottom: 48px;
`;
const InformationDetail = styled(Link)`
  font-size: 16px;
  line-height:1.5;
  font-weight:400;
  font-family: Roboto, "sans-serif";
  background-color: #015FC9;
  padding: 16px 48px;
  border-radius: 10px;
  color:#FFFFFF;
  cursor:pointer;
  text-decoration: none;
  border: 1px solid #015FC9;
  transition: all 500ms ease-in-out;
  &:hover {
    background-color:#0DD3F1;
  }
`;
const Image = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  ${Small({
  position:"absolute"
  })}
`;
const ButtonContainer = styled.button`
position:absolute;
top:0;
bottom:0;
width: 15%;
min-width:62px;
display:flex;
justify-content: center;
align-items: center;
cursor:pointer;
border: 0;
background-color:transparent;
&:hover, &:focus {
  & > span {
    background-color: rgb(25, 107, 195);
  }
}
`;
const Button = styled.span`
  border-radius: 50%;
  background-color: rgba(25, 107, 195, 0.579);
  height:50px;
  width:50px;
  color:white;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightButton = styled(ButtonContainer)`
  right: 0px;
  `;
const LeftButton = styled(ButtonContainer)`
  left: 0px;
  `;

const Carousel = () => {
  interface Images {
    img: number;
    title:string;
    description:string;
  }
  const imagesLink:Images[] = React.useMemo(() => [
    {
   img: 1,
   title: "Insurance Creates Wealth For Everyone",
   description: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
  },
    {
   img: 2,
   title: "The Best Insurance Begins Here",
   description: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
  }], [])
  const settings : Settings  = {
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:false,
    autoplaySpeed:3000,
    arrows:false,
    dots:false
  }
  const slideRef = React.useRef<Slider>(null)
  return (
    <Container>
      <Slider ref={slideRef}  {...settings} >
        {
          imagesLink.map(
            info=>
            <Slide>
              <Image src={`${process.env.PUBLIC_URL}/assets/slider/carousel-${info.img}.jpg`}/>
              <InformationContainer>
                <InformationWrapper>
                <Information>
                <Title>{info.title}</Title>
                <Description>{info.description}</Description>
                <InformationDetail to="/">More Details</InformationDetail>
                </Information>
                </InformationWrapper>
              </InformationContainer>
            </Slide>
          )
        }
      </Slider>
      <LeftButton onClick={()=>slideRef.current?.slickPrev()}>
        <Button>
        <FontAwesomeIcon icon={faAngleLeft} size="lg"/>
        </Button>
      </LeftButton>
      <RightButton onClick={()=>slideRef.current?.slickNext()}>
        <Button>
      <FontAwesomeIcon icon={faAngleRight} size="lg"/>
        </Button>
      </RightButton>
    </Container>
  )
}

export default Carousel