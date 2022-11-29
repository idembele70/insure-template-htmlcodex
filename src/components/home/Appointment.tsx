import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Small, SmallDesktop, Tablet, XSmall } from '../../tools/responsive';

interface MutableSCProps { // SC mean Styled Components
  defaultTheme:boolean
}
const Container = styled.div<MutableSCProps>`
  width:100%;
  padding:48px 12px;
  margin:48px 0;
  background: ${({ defaultTheme }) => defaultTheme ? "#FFF" : "linear-gradient(rgba(1, 95, 201, .9), rgba(1, 95, 201, .9)), url(${process.env.PUBLIC_URL}/assets/appointment/appointment.jpg)"};
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
`;
const Row = styled.div`
  width:95%;
  max-width:1320px;
  margin:0 auto;
  padding: 48px 0;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  `;
const Col = styled.div`
  min-width: 448px;
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

const LeftTitle = styled.h1<MutableSCProps>`
  color #${({ defaultTheme }) => defaultTheme ? "15233C" : "FFF" };
  font-weight: 700;
  margin-bottom:48px;
  ${SmallDesktop({
    FontSize:"calc(1.375rem + 1.5vw)"
  })}
`;
const LeftDescription = styled.p<MutableSCProps>`
  color:#${({ defaultTheme }) => defaultTheme ? "696E77": "FFF" };
  font-size:1rem;
  margin-bottom:48px;
`;
const ContactContainer = styled.div<MutableSCProps>`
  margin-top:auto;
  background-color: #${({ defaultTheme }) => defaultTheme ? "F6F7FC" :"FFF" };
  border-radius: 10px;
  padding:16px;
  `;
const Contact = styled.div<MutableSCProps>`
  border-radius: 10px;
  width:100%;
  background-color: #${({ defaultTheme }) => defaultTheme ? "FFF" : "015FC9"};
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
const ContactInfo = styled.h5<MutableSCProps>`
  color: #${({ defaultTheme }) => defaultTheme ? "15233C": "FFF" };
  line-height: 1.2;
`;
const Right = styled(Col)`
  ${
    XSmall({
      padding:"24px"
    })
  }
`;
const Form = styled.form<MutableSCProps>`
border-radius:10px;
padding:48px;
background-color:#${({ defaultTheme }) => defaultTheme ?  "F6F7FC": "FFF" };;
`;
const FormRow = styled.div`
display: flex;
  margin-bottom: 24px;
  ${XSmall({
    marginBottom:0,
    flexDirection:"column"
  })}
`;
const Input = styled.input`
  width:calc(50% - 16px);
  padding: 16px 12px;
  margin: 0 8px;
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
type AppointmentProps = {
  defaultTheme:boolean;
}
const Appointment = ({defaultTheme}:AppointmentProps) => {
  
  return (
    <Container defaultTheme={defaultTheme}>
      <Row>
        <Left>
          <LeftTitle defaultTheme={defaultTheme}>We're Award Winning Insurance Company</LeftTitle>
          <LeftDescription defaultTheme={defaultTheme}>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.</LeftDescription>
          <ContactContainer defaultTheme={defaultTheme}>
            <Contact defaultTheme={defaultTheme}>
              <Image src={`${process.env.PUBLIC_URL}/assets/appointment/profile.jpg`}/>
              <ContactInfo defaultTheme={defaultTheme}>Call Us: +012 345 6789</ContactInfo>
            </Contact>
          </ContactContainer>
        </Left>
        <Right >
        <Form defaultTheme={defaultTheme}>
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