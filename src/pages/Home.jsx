import React, { useState } from 'react'
import image from '../assets/personal-img.jpg'
import '../styles/Home.css'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CV from '../assets/IbrahimUllahCV.pdf';
import TypeWriter from 'typewriter-effect';

const Home = () => {
    const personalInfo = {
        firstName: 'Ibrahim',
        lastName: 'Ullah',
        location: 'Manchester',
    }

    const titles = ['Junior Software Developer', 'Frontend Engineer', 'Backend Engineer', 'Full Stack Developer']

  return (
    <div className='home-page'>
    <div className='flex-left'>
      <div className='img-container'>
        <img src={image} className='blob'></img>
      </div>
      <div className='txt-container'>
      <h2>Hey there, my name is <span>{personalInfo.firstName + ' ' + personalInfo.lastName}</span></h2>
      <h3>
          I am a{' '}
          <span>
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
              }}
              style={{ borderRight: '.15em solid black' }}
              onInit={(typewriter) => {
                titles.forEach((title, index) => {
                  typewriter.typeString(title)
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(500);
                });
                typewriter.start();
              }}
            />
          </span>{' '}
          from <span>Manchester, UK</span>
        </h3>
        </div>
      </div>
      <div className='btn-links'>
      <a href={CV} download="ibrahimullah-cv.pdf"><button className='cv' style={{whiteSpace: 'nowrap', fontSize: 16}}>Download CV</button></a>
      <a href='https://github.com/Mullah98' target='_blank'><button className='github'><GitHubIcon style={{fontSize: 40}} /></button></a>
      <a href='https://www.linkedin.com/in/ibrahim-ullah-380972284' target='_blank'><button className='linkdin'><LinkedInIcon style={{fontSize: 40}}/></button></a>
      </div>
    </div>
  )
}

export default Home
