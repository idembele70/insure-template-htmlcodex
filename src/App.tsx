import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './tools/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './tools/Footer';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
</Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
