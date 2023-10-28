import React from 'react';
import '../../../App.css';
import HomeSection from '../HomeSection';
import AboutMeSection from '../AboutMeSection';
import SkillsSection from '../SkillsSection';
import ProjectsSection from '../ProjectsSection';
import AchievementsSection from '../AchievementsSection';
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

          <div id='skills'>
            <SkillsSection />
          </div>

          <div id='projects'>
            <ProjectsSection />
          </div>
          
          <div id='achievements'>
            <AchievementsSection />
          </div>

          <div id='contact'>
            <ContactMeSection />
          </div>
        </>
    )
}

export default Home;