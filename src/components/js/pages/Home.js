import React from 'react';
import HomeSection from '../HomeSection';
import AboutMeSection from '../AboutMeSection';
import SkillsSection from '../SkillsSection';
import ProjectsSection from '../ProjectsSection';
import ContactMeSection from '../ContactMeSection';

function Home(){
    return (
        <>
          <div id='home'>
            <HomeSection />
          </div>

          <div id='about'>
            <AboutMeSection />
          </div>

          
        </>
    )
}

export default Home;