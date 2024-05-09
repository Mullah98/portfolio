import React, { useState } from 'react'
import image from '../assets/personal-img.jpg'
import '../styles/index.css'
import Navbar from '../components/Navbar'

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
    <img src={image}></img>
      <button>Contact me <i class="bi bi-envelope"></i></button>
      <h2>Hi there, my name is <span>{personalInfo.firstName + ' ' + personalInfo.lastName}</span></h2>
      <h3>I am a <span>{titles[selectedTitle]}</span></h3>
      <Navbar />
    </div>
  )
}

export default Home
