import React, { useState } from 'react'
import image from '../assets/personal-img.jpg'
import '../styles/Home.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CV from '../assets/IbrahimUllahCV.pdf'

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
    <div className='flex-left'>
      <div className='img-container'>
        <img src={image}></img>
      </div>
      <div className='txt-container'>
      <h2>Hi there, my name is <span>{personalInfo.firstName + ' ' + personalInfo.lastName}</span></h2>
      <h3>I am a <span>{titles[selectedTitle]}</span> from <span>Manchester, UK</span></h3>
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
