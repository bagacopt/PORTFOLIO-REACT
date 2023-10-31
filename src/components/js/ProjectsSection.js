import React from 'react'
import '../../App.css';
import '../css/ProjectsSection.css';

function ProjectsSection() {
  return (
    <div className='container'>
            <div className='container-title'>
                <h1> PROJECTS </h1>
            </div>

            <div className='container-info'>
                <div className='container-image'>
                    <img src='../images/project-1.png'  />
                </div>
                <div className='container-separator' />
                <div className='container-image'>
                    <img src='../images/about-img.png' />
                </div>
                <div className='container-separator' />
                <div className='container-image'>
                    <img src='../images/about-img.png'  />
                </div>
                <div className='container-image'>
                    <img src='../images/about-img.png'  />
                </div>
                <div className='container-separator' />
                <div className='container-image'>
                    <img src='../images/about-img.png'  />
                </div>
                <div className='container-separator' />
                <div className='container-image'>
                    <img src='../images/about-img.png'  />
                </div>
            </div>
        </div>
  )
}

export default ProjectsSection
