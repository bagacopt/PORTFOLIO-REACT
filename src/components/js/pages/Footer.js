import React from 'react';
import '../../css/Footer.css';

function Footer() {
  return (
    <>
    <footer className='footer'>
      <div className='container-footer'>
        <div className='container-footer-text'>
          Copyright © 2023 bagaco. All rights reserved.
        </div>
        
        <div className='container-logo' href='https://github.com/bagacopt'>
          <a href="https://github.com/bagacopt"><i className="fa-brands fa-github fa-xl"></i></a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer