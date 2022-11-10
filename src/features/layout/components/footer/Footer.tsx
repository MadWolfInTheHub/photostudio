import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.scss'



const Footer = () => {
  const { pathname } = useLocation()
  return (
    <footer className='footer'>
      {
        pathname === '/' && window.innerWidth > 600 &&
        <div>© 2022 Asya</div>
      }
      {
        pathname === '/contact' && window.innerWidth > 600 &&
        <div className='footer__socials'>
          <a className='footer__socials_link' href="https://www.instagram.com/a_pakhomka/">Instagram</a>
          <a className='footer__socials_link' href="https://www.facebook.com/profile.php?id=100006883006905">Facebook</a>
        </div>
      }
      {
        pathname === '/contact' && window.innerWidth < 600 &&
        <div className='footer__socials'>
          <a className='footer__socials_link' href="https://www.instagram.com/a_pakhomka/">
            <FontAwesomeIcon className='footer__socials_link' icon={faInstagram} />
          </a>
          <a className='footer__socials_link' href="https://www.facebook.com/profile.php?id=100006883006905">
            <FontAwesomeIcon className='footer__socials_link' icon={faFacebook} />
          </a>
        </div>
      }
    </footer>
  );
};

export default Footer;