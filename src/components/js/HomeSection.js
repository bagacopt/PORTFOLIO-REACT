import React, { useState } from 'react';
import '../../App.css';
import '../css/HomeSection.css';
import ReactTyped from 'react-typed';

function HomeSection() {
  const idElement = document.getElementById('about');
  const [hovering, setHovering] = useState(false);

  window.addEventListener('scrollToElement', (event) => { const { idElement } = event.detail; })

  const scrollDown = () => {
    if (idElement) {
      window.scrollTo({ top: 965, behavior: 'smooth' });
    }
  };

  const signAnimation = () => {
      setHovering(true);
  };

  const signStopped = () => {
    setHovering(false);
  };

  return (
    <div className='hero-container'>
      <h1> PORTFOLIO </h1>
      <h2> <ReactTyped strings={["Designed by bagaco"]} typeSpeed={100} backSpeed={100} backDelay={3000} cursorChar=' />' loop /> </h2>
      <div className={`hero-btns ${hovering ? 'hovering' : ''}`}>
        <i className="fas fa-arrow-down" size="2xl" style={{ color: "#fff" }} onClick={scrollDown} onMouseEnter={signAnimation} onMouseLeave={signStopped} />
      </div>
    </div>
  );
}

export default HomeSection;