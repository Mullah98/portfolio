import React, { useState } from 'react'
import image from '../assets/personal-img.jpg'
import '../styles/Home.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Home = () => {
    const personalInfo = {
        firstName: 'Ibrahim',
        lastName: 'Ullah',
        location: 'Manchester',
    }

    const titles = ['Junior Software Developer', 'Frontend Engineer', 'Backend Engineer', 'Full Stack Developer']
    const [selectedTitle] = useState(Math.floor(Math.random() * titles.length))

  return (
    <div className='home-page'>
      <div className='img-container'>
        <img src={image}></img>
      </div>
      <div className='txt-container'>
      <h2>Hi there, my name is <span className='span1'>{personalInfo.firstName + ' ' + personalInfo.lastName}</span></h2>
      <h3 className='span2'>I am a <span>{titles[selectedTitle]}</span></h3>
      </div>
      <div className='btn-links'>
      <a href='https://github.com/Mullah98'><button className='github'><GitHubIcon /></button></a>
      <a href='https://www.linkedin.com/in/ibrahim-ullah-380972284'><button className='linkdin'><LinkedInIcon /></button></a>
      </div>
    </div>
  )
}

export default Home
