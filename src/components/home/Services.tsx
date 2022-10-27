import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tablet,Small } from '../../tools/responsive';
const Container = styled.div`
  max-width:1320px;
  width:95%;
  margin:0 auto;
  padding: 48px 12px;
`;
const Title = styled.h1`
  font-weight: 700;
  max-width:500px;
  margin:0 auto 48px;
  text-align: center;
  ${Tablet({
    fontSize:"calc(1.375rem + 1.5vw)"
  })}
`;
const ServiceContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:24px;
  padding:24px;
  ${Small({
    padding:0
  })}
  `;
const Service = styled.div`
  padding: 48px;
  width:calc(100% / 3 - 24px); // 24px equal the gap size
 background-color: #FFF;
  position:relative;
  box-shadow: 0 0 45px rgb(0 0 0 / 7%);
  ${Tablet({
    width: "calc(100% / 2 - 24px)"
  })}
  ${Small({
    width: "100%"
  })}
`;
const ServiceTop = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 24px;
  width:calc(100% + 96px);
  position:relative;
  left:-48px;
`;
const ServiceImgContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #015FC9;
  height:90px;
  width:90px;
  margin-right:24px;
`;
const ServiceImg = styled.img`
  height:60px;
  width:60px;
`;
const ServiceTitle = styled.h4`
  font-size:1.5rem;
  font-family:"Poppins", "sans-serif";
  color:#15233C;
  font-weight: 600;
  line-height: 1.2;
  ${Tablet({
    fontSize:"calc(1.275rem + .3vw)"
  })}
`;
const ServiceDescription = styled.p`
  font-size:1rem;
  margin-bottom: 24px;
  color:#696E77;
`;
const Button = styled(Link)`
  font-size: 1rem;
  font-weight:400;
  line-height:1.5;
  color: #015fc9;
  background-color: #F6F7FC;
  padding: 6px 16px;
  transition: all 0.5s ease;
  text-decoration: none;
  border-radius: 10px;
  height:38px;
  border: 1px solid #F6F7FC;
  &:hover {
    color: #F6F7FC;
    background-color: #015fc9;
    border: 1px solid #015fc9;
  }
`;
const Services = () => {
  interface ServiceProps {
    img:string;
    title:string;
    description:string;
  }
  const imgBaseUrl = `${process.env.PUBLIC_URL}/assets/icon/icon-`
  const serviceList: ServiceProps[] = React.useMemo(() =>[
    {
      img:"10",
      title:"Life",
      description:"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"
    },
    {
      img:"01",
      title:"Health",
      description:"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"
    },
    {
      img:"05",
      title:"Home",
      description:"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"
    },
    {
      img:"08",
      title: "Vehicle",
      description:"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"
    },
    {
      img:"07",
      title: "Business",
      description:"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"
    },
    {
      img:"06", 
      title: "Property",
      description:"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"
    },
  ] , [])
  return (
    <Container>
      <Title>We Provide professional Insurance Services</Title>
      <ServiceContainer>
    {
      serviceList.map(service=>
        <Service key={service.img}>
        <ServiceTop>
          <ServiceImgContainer>
            <ServiceImg src={`${imgBaseUrl}${service.img}-light.png`}/>
          </ServiceImgContainer>
          <ServiceTitle>{`${service.title} insurance`}</ServiceTitle>
        </ServiceTop>
        <ServiceDescription>{service.description}</ServiceDescription>
        <Button to="/">Read More</Button>
        </Service>)
    }
      </ServiceContainer>
    </Container>
  )
}

export default Services