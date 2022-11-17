import React from 'react'
import Slider, { Settings } from 'react-slick';
import styled, { keyframes } from 'styled-components';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tablet,SmallDesktop,Small,XSmall } from '../../tools/responsive';

const Container = styled.div`
  width:100%;
  max-width:1320px;
  margin: 0 auto;
  padding:48px 12px;
`;
const Row = styled.div`
max-width:1320px;
  width:95%;
  margin:0 auto;
`;
const Title = styled.h1`
  max-width:500px;
  font-weight: 700;
  margin:0 auto 48px;
  text-align:center;
  ${Tablet({
    fontSize: "calc(1.375rem + 1.5vw)"
  })}
`;
const ReviewContainer = styled.div`
  display:flex;
  gap:48px;
`;
const Left = styled.div`
  position:relative;
  width:20%;
  height:361px;
  ${Tablet({
    display:"none"
  })}
  `;
  const scale = keyframes`
  from {
transform :scale(1);
}
to {
    transform :scale(1.1);

  }
  `
  const ReviewImage = styled.img`
    position:absolute;
    border: 1px dashed #015FC9;
    border-radius:10px;
    padding:5px;
    animation: ${scale} 1.5s infinite forwards alternate;
  `;
  const ReviewImageOne = styled(ReviewImage)`
    left:50%;
    top:10%;
    height:70px;
    width:70px;
    transform: translateX(-50%);
  `;
  const ReviewImageTwo = styled(ReviewImage)`
  left:10%;
    top:50%;
    height:60px;
    width:60px;
    transform: translateY(-50%);
  `;
  const ReviewImageThree = styled(ReviewImage)`
    right:10%;
    bottom:10%;
    height:50px;
    width:50px;
    transform: translate(-50%);
  `;
const Center = styled.div`
  width:60%;
  max-width:612px;
  ${Tablet({
    margin: "0 auto",
    width:"90%",
    maxWidth:700
  })}
  `;
  const Slide = styled.div`
    
  `;
  const Image  = styled.img`
    height:100;
    width:100;
    margin: 0 auto 24px;
    border-radius:10px;
  `;
  const Description = styled.p`
    color:#696E77;
    font-size:1.25rem;
    margin: 0 0 16px;
    text-align: center;
  `;
  const Name = styled.h5`
    color:#15233C;
    font-family: "Poppins", "sans-serif";
    margin-bottom: 8px;
    text-align: center;
  `;
  const Profession = styled.span`
    color:#696E77;
    font-size:1rem;
    font-family: "Roboto", "sans-serif";
    display:table;
    margin: 0 auto;
  `;
  const Button = styled.button`
    height:45px;
    width:45px;
    margin: 0 5px;
    background-color:#015FC9;
    cursor:pointer;
    border:none;
    border-radius:10px;
    color:#FFF;
    transition: all 150ms ease-in-out;
    &:hover {
      background-color:#0DD3F1;
    }
  `;
  const ButtonContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    & path {
      color:#FFF;
    }
  `;
const Right = styled.div`
position:relative;
width:20%;
height:361px;
${Tablet({
    display:"none"
  })}
`;
const Testimonial = () => {
  const BaseUrl = `${process.env.PUBLIC_URL}/assets/testimonial/`
  const ReviewBaseUrl = `${BaseUrl}testimonial-`
  const EndUrl=".jpg"
  const settings : Settings = {
    slidesToShow:1,
    slidesToScroll:1,
    speed:1000,
    autoplay:false,
    autoplaySpeed:3000,
    arrows:false,
    dots:false
  }
  interface SlideItems {
    idx:number;
    description:string;
    name: string;
    profession:string
  }
const slideItems:SlideItems[] = React.useMemo(() => [
  {
    idx:1,
    description: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "Client Name",
    profession: "profession"
  },
  {
    idx:2,
    description: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "Client Name",
    profession: "profession"
  },
  {
    idx:3,
    description: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "Client Name",
    profession: "profession"
  },
], [])
const slideRef  = React.useRef<Slider>(null)
  return (
    <Container>
      <Row>
    <Title>What They Say About Our Insurance</Title>
    <ReviewContainer>
    <Left>
      <ReviewImageOne src={`${ReviewBaseUrl}1${EndUrl}`}/>
      <ReviewImageTwo src={`${ReviewBaseUrl}2${EndUrl}`}/>
      <ReviewImageThree src={`${ReviewBaseUrl}3${EndUrl}`}/>
    </Left>
    <Center>
      <Slider ref={slideRef} {...settings}>
      {
        slideItems.map((item,idx)=><Slide key={idx}>
          <Image src={`${ReviewBaseUrl}${item.idx}${EndUrl}`}/>
          <Description>{item.description}</Description>
          <Name>{item.name}</Name>
          <Profession>{item.profession}</Profession>
        </Slide>)
      }
      </Slider>
      <ButtonContainer>
        <Button onClick={()=>slideRef.current?.slickPrev()}>
          <FontAwesomeIcon icon={faAngleLeft} size="lg"/>
        </Button>
        <Button onClick={()=>slideRef.current?.slickNext()}>
          <FontAwesomeIcon icon={faAngleRight} size="lg"/>
        </Button>
      </ButtonContainer>
    </Center>
    <Right>
      <ReviewImageOne src={`${ReviewBaseUrl}3${EndUrl}`}/>
      <ReviewImageTwo src={`${ReviewBaseUrl}2${EndUrl}`}/>
      <ReviewImageThree src={`${ReviewBaseUrl}1${EndUrl}`}/>
    </Right>
    </ReviewContainer>
      </Row>
    </Container>
  )
}

export default Testimonial