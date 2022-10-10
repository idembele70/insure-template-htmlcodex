import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Small, SmallDesktop, Tablet, XSmall } from '../tools/responsive';
const Container = styled.div`
  width:100%;
  padding:48px 12px;
  margin:48px 0;
  background: linear-gradient(rgba(1, 95, 201, .9), rgba(1, 95, 201, .9)), url(${process.env.PUBLIC_URL}/assets/appointment/appointment.jpg);
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
`;
const Row = styled.div`
  width:95%;
  max-width:1320px;
  margin:0 auto;
  padding: 48px 12px;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  `;
const Col = styled.div`
  min-width: 448px;
  margin-top: 48px;
  padding: 0 24px;
  width:50%;
  ${Tablet({
    width:"95%",
    minWidth: "initial"
  })}
  ${
    XSmall({
      width:"100%",
      padding:0
    })
  }
`;
const Left = styled(Col)`
display: flex;
flex-direction:column;
`;
const LeftTitle = styled.h1`
  color:#FFF;
  font-size:2.5rem;
  font-family:"Poppins", "sans-serif";
  font-weight: 700;
  line-height:1.2;
  margin-bottom:48px;
  ${SmallDesktop({
    FontSize:"calc(1.375rem + 1.5vw)"
  })}
`;
const LeftDescription = styled.p`
  color:#FFF;
  font-size:16px;
  font-family:"Roboto", "sans-serif";
  font-weight:400;
  line-height:1.5;
  margin-bottom:48px;
`;
const ContactContainer = styled.div`
  margin-top:auto;
  background-color:#FFF;
  border-radius: 10px;
  padding:16px;
  `;
const Contact = styled.div`
  border-radius: 10px;
  width:100%;
  background-color: #015FC9;
  padding:16px;
  display:flex;
  align-items:center;
`;
const Image = styled.img`
  height:45px;
  width:45px;
  margin-right:16px;
  border-radius:50%;
`;
const ContactInfo = styled.h5`
  color:#FFF;
  font-size:1.25rem;
  font-family:"Poppins", "sans-serif";
  font-weight: 600;
  line-height: 1.2;
`;
const Right = styled(Col)`
  background-color: #FFF;
  border-radius:10px;
  padding:48px;
  ${
    XSmall({
      padding:"24px"
    })
  }
`;
const Form = styled.form`
`;
const FormRow = styled.div`
display: flex;
justify-content: space-between;
  margin-bottom: 24px;
  ${XSmall({
    marginBottom:0,
    flexDirection:"column"
  })}
`;
const Input = styled.input`
  width:calc(50% - 16px);
  padding: 16px 12px;
  border:1px solid #ced4da;
  font-size: 1rem;
  font-weight:400;
  line-height: 1.5;
  color:#696E77;
  background-color:#fff;
  border-radius:10px;
  transition: all ease-in-out 150ms;
  &:focus {
    border-color:#80afe4;
    outline:0;
    box-shadow: 0 0 0 4px rgba(1,95,201,0.25);
  }
  ${XSmall({
    width:"100%",
    margin:"8px 0"
  })}
`;
const TextArea = styled.textarea`
  width:100%;
  height:80px;
  padding:16px 12px;
  font-size: 1rem;
  font-weight:400;
  line-height:1.5;
  color: #696e77;
  background-color: #fff;
  border:1px solid #ced4da;
  border-radius:10px;
  transition: all ease-in-out 150ms;
  resize: vertical;
  margin-bottom:16px;
  &:focus {
    outline:0;
    border-color: #80afe4;
    box-shadow:0 0 0 4px rgba(1,95,201,0.25);
  }
  ${XSmall({
    margin:"8px 0"
  })}
`;
const Button = styled.button`
  color:#FFF;
  font-size:16px;
  font-family: "Roboto", "sans-serif";
  background-color: #015FC9;
  padding:16px 48px;
  cursor:pointer;
  transition:  all 500ms ease-in-out;
  border: 1px solid transparent;
  user-select: none;
  border-radius:10px;
  &:hover {
    background-color: #0DD3F1;
  }
`;
const Appointment = () => {
  
  return (
    <Container>
      <Row>
        <Left>
          <LeftTitle>We're Award Winning Insurance Company</LeftTitle>
          <LeftDescription>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.</LeftDescription>
          <ContactContainer>
            <Contact>
              <Image src={`${process.env.PUBLIC_URL}/assets/appointment/profile.jpg`}/>
              <ContactInfo>Call Us: +012 345 6789</ContactInfo>
            </Contact>
          </ContactContainer>
        </Left>
        <Right>
        <Form>
        <FormRow>
          <Input placeholder="Your Name"/>
          <Input placeholder="Your Email"/>
        </FormRow>
        <FormRow>
          <Input placeholder="Your Mobile"/>
          <Input placeholder="Service Type"/>
        </FormRow>
          <TextArea placeholder='Message'></TextArea>
        <Button type="submit">Get Appointment</Button>
        </Form>
        </Right>
      </Row>
    </Container>
  )
}

export default Appointment