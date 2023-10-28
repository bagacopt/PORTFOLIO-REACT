import React, { useState } from 'react';
import '../../App.css';
import '../css/HomeSection.css';

function HomeSection() {
  const idElement = document.getElementById('about');
  const [hovering, setHovering] = useState(false);

  window.addEventListener('scrollToElement', (event) => { const { idElement } = event.detail; })

  const scrollDown = () => {
    if (idElement) {
      idElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const signAnimation = () => {
    setHovering(true); 
  };

  return (
    <div className='hero-container'>
      <h1> PORTFOLIO </h1>
      <h2> Designed by: bagaco</h2>
      <div className={`hero-btns ${hovering ? 'hovering' : ''}`}>
        <i className="fas fa-arrow-down" size="2xl" style={{ color: "#ffffff" }} onClick={scrollDown} onMouseOver={signAnimation} />
      </div>
    </div>
  );
}

export default HomeSection;