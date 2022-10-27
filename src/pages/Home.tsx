import React from 'react'
import About from '../components/home/About'
import Appointment from '../components/home/Appointment'
import Carousel from '../components/home/Carousel'
import Facts from '../components/home/Facts'
import Features from '../components/home/Features'
import Services from '../components/home/Services'
import Team from '../components/home/Team'
import Testimonial from '../components/home/Testimonial'
import Footer from '../tools/Footer'

const Home = () => {
  return (
    <>
    <Carousel/>
    <About/>
    <Facts/>
    <Features/>
    <Services/>
    <Appointment/>
    <Team/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home