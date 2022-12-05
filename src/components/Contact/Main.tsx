import React from 'react'
import {PageRow } from '../home/Carousel'
import styled from 'styled-components';
import { SmallDesktop, Tablet,Small } from '../../tools/responsive';
import { Link } from 'react-router-dom';
import { Button } from '../home/Appointment';

const Container = styled(PageRow)`
  padding: 48px 12px;
  display:flex;
  flex-wrap:wrap;
`;
const Col = styled.div`
  width:50%;
  min-width:468px;
  margin-top: 48px;
  padding: 0 24px;
  ${Tablet({
    width:"100%",
    minWidth:"initial"
  })}
`;
const Title = styled.h1`
  color:#15233C;
  font-size:2.5rem;
  margin-bottom:48px;
  font-weight:700;
  ${SmallDesktop({
    fontSize:"calc(1.375rem + 1.5vw)"
  })}
`;
const Paragraph = styled.p`
  color:#696E77;
  font-size:1rem;
  margin-bottom:24px;
`;
const DLLinks = styled(Link)`
  color:#015FC9;
  font-size:1rem;
  text-decoration:none;
`;
const Form = styled.form`
  display:flex;
  flex-direction:column;
  gap:16px;
`;
const Row = styled.div`
  padding: 0 8px;
  width:100%;
  display:flex;
  gap:16px;
  ${Small({
    flexDirection:"column"
  })}
  & > input, & textarea {
    &:focus{
    border-color: #80afe4;
    outline:0;
    box-shadow: 0 0 0 0.25rem rgba(1,95,201,0.25);
  }
  }
`;
const Input = styled.input`
  padding:16px 12px;
  flex:1;
  font-size:1rem;
  font-weight:400;
  line-height:1.5;
  color:#696E77;
  border: 1px solid #ced4da;
  transition: all 150ms ease-in-out;
  border-radius: 10px;
 
`;
const TextArea  = styled.textarea`
  width: 100%;
  padding: 16px 12px;
  min-height:calc(1.5em + 0.75rem + 2px);
  height:100px;
  font-size:1rem;
  font-weight:400;
  line-height:1.5;
  color:#696E77;
  border:1px solid #ced4da;
  border-radius:10px;
  transition: all 150ms ease-in-out;
  resize:vertical;
`;
const Iframe = styled.iframe`
  width:100%;
  height:100%;
  border-radius:10px;
  min-height:450px;
  border:0;
`;
const Submit = styled(Button)`
  max-width:203px;
  margin-left:8px;
`;
const Main = () => {
  return (
    <Container>
      <Col>
      <Title>If You Have Any Query, Please Contact Us</Title>
      <Paragraph>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <DLLinks to="">Download Now</DLLinks>.</Paragraph>
      <Form>
        <Row>
          <Input placeholder='Your Name'/>
          <Input placeholder='Your Email'/>
        </Row>
        <Row>
          <Input placeholder='Subject'/>
        </Row>
        <Row>
          <TextArea placeholder='Message'/>
        </Row>
      <Submit type='submit'>Send Message</Submit>
      </Form>
        </Col>
      <Col>
      <Iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
         aria-hidden="false"></Iframe>
      </Col>
    </Container>
  )
}

export default Main