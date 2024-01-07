import React from 'react'
import '../../App.css';
import '../css/Projects.css';

function Projects() {
  return (
    <div className='container'>
            <div className='container-title'>
                <h1> PROJECTS </h1>
            </div>

            <div className='container-info'>
                <div className='container-image'>
                    <img src='../images/project-1.png' className='img'/>
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

export default Projects