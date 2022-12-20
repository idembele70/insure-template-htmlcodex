import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './tools/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './tools/Footer';
import Service from './pages/Service';
import Feature from './pages/Feature';
import Appointment from './pages/Appointment';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function App() {
  return (
    <>
<Header/>
<Routes>
  <Route path='/insure-template-htmlcodex/' element={<Home/>}/>
  <Route path='/insure-template-htmlcodex/about' element={<About/>}/>
  <Route path='/insure-template-htmlcodex/service' element={<Service/>}/>
  <Route path='/insure-template-htmlcodex/feature' element={<Feature/>}/>
  <Route path='/insure-template-htmlcodex/appointment' element={<Appointment/>}/>
  <Route path='/insure-template-htmlcodex/team' element={<Team/>}/>
  <Route path='/insure-template-htmlcodex/testimonial' element={<Testimonial/>}/>
  <Route path='/insure-template-htmlcodex/404' element={<NotFound/>}/>
  <Route path='/insure-template-htmlcodex/contact' element={<Contact/>}/>
  <Route path='/insure-template-htmlcodex/*' element={<NotFound/>}/>
</Routes>
<Footer/>
    </>
  );
}

export default App;
