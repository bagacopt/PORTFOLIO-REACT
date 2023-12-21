import React, { useState } from 'react';
import '../../App';
import '../css/HomeSection.css';
import ReactTyped from 'react-typed';

function HomeSection() {
  const [arrowAnimation, setarrowAnimation] = useState(false);

  const arrowAnimationStart = () => setarrowAnimation(true);
  const arrowAnimationStop = () => setarrowAnimation(false);

  return (
    <div className='container'>
      <div className='title'>
        <h1> PORTFOLIO </h1>
      </div>
      <div className='sub-title-animated'>
        <h2> <ReactTyped strings={["Designed by bagaco"]} typeSpeed={100} backSpeed={100} backDelay={3000} cursorChar=' />' loop /> </h2>
      </div>
      <div className = 'arrow-animated'>
        <i className ={`fas fa-arrow-down ${arrowAnimation ? 'up-down-animation' : ' '}`} size="2xl" style={{ color: "#fff" }} onMouseOver={arrowAnimationStart} onMouseLeave={arrowAnimationStop} />
      </div>
    </div>
  );
}

export default HomeSection;