import React from 'react'
import styled from 'styled-components';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider, {InnerSlider, Settings} from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const Container = styled.div`
position:relative;
`;
const Image = styled.img`
  min-height: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  position:absolute;
  top:50%;
  transform: translateY(-50%);
  border-radius: 50%;
  height:50px;
  width: 50px;
  background-color: #8BB1E4;
  border: 0;
  cursor:pointer;
`;
const RightButton = styled(Button)`
  right: 40px;
  `;
const LeftButton = styled(Button)`
  left: 40px;
  `;

const Carousel = () => {
  const [imagesLink, setImagesLink] = React.useState<number[]>([1,2]);
  const settings : Settings  = {
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:false,
    autoplaySpeed:3000,
    arrows:false
  }
  const slideRef = React.useRef<Slider>(null)
  return (
    <Container>
      <Slider ref={slideRef}  {...settings} >
        {
          imagesLink.map(
            img=>
              <Image src={`${process.env.PUBLIC_URL}/assets/slider/carousel-${img}.jpg`}/>
          )
        }
      </Slider>
      <LeftButton onClick={()=>slideRef.current?.slickPrev()}>
        <FontAwesomeIcon icon={faAngleLeft}/>
      </LeftButton>
      <RightButton onClick={()=>slideRef.current?.slickNext()}>
      <FontAwesomeIcon icon={faAngleRight}/>
      </RightButton>
    </Container>
  )
}

export default Carousel