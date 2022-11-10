import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/home/components/Home';
import Portfolio from './features/portfolio/components/Portfolio';
import Contact from './features/contact/components/Contact';

import './styles/global/global.scss';
import Layout from './features/layout/components';





function App() {
  // const setThemePreferences = () => {
  //   const day = new Date();

  //   const currentHour = day.getHours();

  //   (currentHour >= 24 || currentHour <= 6 ) ? document.body.classList.add('dark-theme') : document.body.classList.add('white-theme');
  // }
  // setThemePreferences();
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
