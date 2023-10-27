import React from 'react';
import '../../App.css';
import { Button } from './Button';
import '../css/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1> PORTFOLIO </h1>
      <h2> Designed by: bagaco</h2>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Learn more about me!
        </Button>
        <i class="fas fa-arrow-down" size="2xl" style={{color: "#ffffff"}}></i>
      </div>
    </div>
  )
}

export default HeroSection
