import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  const scrollDown = (elementID) => {
    const idElement = document.getElementById(elementID);
    if (elementID === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (elementID === 'about') {
      window.scrollTo({ top: 995, behavior: 'smooth' });
    } else if (elementID === 'skills') {
      window.scrollTo({ top: 1591, behavior: 'smooth' });
    } else if (elementID === 'projects') {
      window.scrollTo({ top: 2451, behavior: 'smooth' });
    } else if (elementID === 'contact') {
      window.scrollTo({ top: 2997, behavior: 'smooth' });
    } else {
      idElement.scrollIntoView({ behavior: 'smooth'});
    }

    // Create a custom event and dispatch it with the elementID
    const scrollEvent = new CustomEvent('scrollToElement', {
      detail: { elementID },
    });
    window.dispatchEvent(scrollEvent);
  }

  useEffect(() =>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link className='navbar-logo' onClick={() => { closeMobileMenu(); scrollDown('home'); }}>
              PORTFOLIO
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-xmark' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link className='nav-links' onClick={() => { closeMobileMenu(); scrollDown('about'); }}>
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-links' onClick={() => { closeMobileMenu(); scrollDown('skills'); }}>
                  Skills
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-links' onClick={() => { closeMobileMenu(); scrollDown('projects'); }}>
                  Projects
                </Link>
              </li>
            </ul>
            
            <Link onClick={() => { closeMobileMenu(); scrollDown('contact'); }} className='button'>
                <Button buttonStyle='btn--outline'> 
                  Contact Me 
                </Button>
              </Link>
          </div>
        </nav>
    </>
  )
}

export default Navbar