import React, { useState } from 'react';
import MobileMenu from '../mobileMenu/mobileMenu';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import  './header.scss'


const Header = () => {
  const { pathname } =  useLocation()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  
  return (
    <header className='header'>
      <h1 className='header__logo'>
        KRVN
      </h1>
      {
        pathname !== '/' && 
        <>
          <FontAwesomeIcon className='header__menu' icon={faBars} onClick={() => setShowMobileMenu(!showMobileMenu)} />
          <MobileMenu 
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
          <nav className='header__nav'>
            <NavLink className='header__nav_btn' to="/">Home</NavLink>
            <NavLink className={`header__nav_btn ${pathname === '/portfolio' ? 'current' : ''}`} to="/portfolio">Portfolio</NavLink>
            <NavLink className={`header__nav_btn ${pathname === '/contact' ? 'current' : ''}`}  to="/contact">Contact</NavLink>
          </nav>
        </>
      }
    </header>
  );
};

export default Header;