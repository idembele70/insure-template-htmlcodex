import React from 'react'
import About from '../components/About'
import Appointment from '../components/Appointment'
import Carousel from '../components/Carousel'
import Facts from '../components/Facts'
import Features from '../components/Features'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
    <Carousel/>
    <About/>
    <Facts/>
    <Features/>
    <Services/>
    <Appointment/>
    </>
  )
}

export default Home