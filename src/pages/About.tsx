import React from 'react'
import PageHeader from "../components/CommonPages/PageHeader"
import AboutComponent from "../components/home/About"
import Facts from '../components/home/Facts'
import Team from '../components/home/Team'
const About = () => {
  return (
    <>
    <PageHeader title='About Us' listTitle='About'/>
    <AboutComponent />
    <Facts/>
    <Team/>
    </>
  )
}

export default About