import React from 'react'
import '../../App.css';
import '../css/AboutMeSection.css';

function AboutMeSection(){
    return (
        <div className='container'>
            <div className='container-title'>
                <h1> ABOUT ME! </h1>
            </div>

            <div className='container-info'>
                <div className='container-image'>
                    <img src='../images/about-img.png' className='container-img' />
                </div>
                <div className='container-separator' />

                
                <div className='container-text'>
                    <p>
                        My name is Tomás Gouveia, I'm from Portugal and I'm a 18 years old freelancer
                        who achieves to gain more and more experience and knowledge about all kinds
                        of programming languages and how we can use them in our daily basis to solve
                        problems or other issues we might have with technology.
                    </p>

                    <p>
                        I'm passionate for learning about technology and how it is changing the world
                        we live in, and my biggest goal is to be able to make a difference on the
                        world, for the better of everyone, for the better of the planet and for the advance
                        of technology.
                    </p>

                    <a href='https://github.com/bagacopt'>
                        <img alt="Github" src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/tomas-gouveia2005/'>
                        <img alt="Linkedin" src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img>
                    </a>
                    <a href='https://www.instagram.com/bagaco.02/'>
                        <img alt="Instagram" src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white'></img>
                    </a>
                    <a href='https://twitter.com/bagaco_02'>
                        <img alt="Twitter" src='https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white'></img>
                    </a>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tomas1234gouveia@gmail.com'>
                        <img alt="Gmail" src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'></img>
                    </a>
                </div>
            </div>
        </div>
            
    )
}

export default AboutMeSection;