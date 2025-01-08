import React, { useState } from 'react'
import image from '../assets/personal-img.jpg'
import '../styles/Home.css'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CV from '../assets/Ibrahim_Ullah_Resume.pdf';
import TypeWriter from 'typewriter-effect';

const Home = () => {
    const personalInfo = {
        firstName: 'Ibrahim',
        lastName: 'Ullah', 
      }

    const titles = ['Junior Software Developer', 'Frontend Engineer', 'JavaScript Developer', 'React Developer']

    const techStack = [
      {name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
      {name: 'Next.js', icon: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png'},
      {name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'},
      {name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
      {name: 'Jest', icon: 'https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png'},
    ]
  

  return (
    <div className='home-page'>
    <div className='flex-left'>
      <div className='img-container'>
        <img src={image} className='blob'></img>
      </div>
      <div className='btn-links'>
        <a href={CV} download="IbrahimUllahCV.pdf"><button style={{whiteSpace: 'nowrap', fontSize: 13}}>Download CV</button></a>
        <a href='https://github.com/Mullah98' target='_blank'><button><GitHubIcon style={{fontSize: 30}} /></button></a>
        <a href='https://www.linkedin.com/in/ibrahim-ullah-380972284' target='_blank'><button><LinkedInIcon style={{fontSize: 30}}/></button></a>
      </div>
    </div>
    <div className='flex-right'>
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
        </h3>
      </div>
      <div className='tech-stack'>
      {techStack.map((skill) => (
        <div className='skill-div' key={skill.name}>
        <img src={skill.icon} className='img-icons' alt={skill.name}/>
        <h3>{skill.name}</h3>
        </div>
      ))}
      </div>
  </div>
  </div>
  )
}

export default Home
