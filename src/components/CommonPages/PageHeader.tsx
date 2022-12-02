import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {PageRow} from "../home/Carousel"
const Container = styled.div`
  width:100%;
  background-image:url(${process.env.PUBLIC_URL}/assets/slider/carousel-1.jpg);
  background-size:cover;
  background-position:center;
  padding: 48px 12px;
  margin-bottom:48px;
`;

const Row = styled(PageRow)`
  padding: 48px 12px;
`;
const Title = styled.h1`
  margin-bottom:24px;
  font-size:3.5rem;
  font-weight:700;
  // font-size: calc(1.475rem + 2.7vw);
`;
const List = styled.ol`
  list-style-type: none;
  display:flex;
  padding:0;
`;
const ListItem = styled.li`
  :not(:first-of-type){
    padding-left: 8px;
    :before {
      content:"/";
      padding-right: 8px;
    }
  }
  :last-of-type {
    & > a {
      color:#015FC9;
      cursor:text;
    }
  }
`;
const ListLink = styled(Link)`
  text-decoration:none;
font-weight:500;
  &:hover {
    color:#015FC9;
  }
 
`;

type PageHeaderProps = {
  title: string;
  listTitle?:string
}

const PageHeader = ({title, listTitle}:PageHeaderProps) => {
  return (
    <Container>
      <Row>
      <Title>{title}</Title>
      <List>
        <ListItem>
          <ListLink to="">Home</ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="">Pages</ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="">{listTitle ? listTitle : title}</ListLink>
        </ListItem>
      </List>
      </Row>
    </Container>
  )
}


export default PageHeader