import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
<Header/>
<Routes>
  hi
</Routes>
    </BrowserRouter>
  );
}

export default App;
