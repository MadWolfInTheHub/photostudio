import { NavLink, useLocation } from 'react-router-dom';
import React, { FC } from 'react';
import './mobileMenu.scss'


type MobileMenuProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: Function;
}

const MobileMenu: FC<MobileMenuProps> = ({ showMobileMenu, setShowMobileMenu }) => {
  const { pathname } = useLocation()

  return (
    <>
    {
      showMobileMenu &&
      <nav className='mobileMenu'>
        <div className='mobileMenu__info'>
          light
        </div>
        <div className='mobileMenu__nav' onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <NavLink className='mobileMenu__nav_btn' to="/">Home</NavLink>
            <NavLink className={`mobileMenu__nav_btn ${pathname === '/portfolio' ? 'current' : ''}`} to="/portfolio">Portfolio</NavLink>
            <NavLink className={`mobileMenu__nav_btn ${pathname === '/contact' ? 'current' : ''}`}  to="/contact">Contact</NavLink>
        </div>
        <div className='mobileMenu__exitBtn' onClick={() => setShowMobileMenu(!showMobileMenu)}>
          +
        </div>
      </nav>
    }
    </>
  );
};

export default MobileMenu;