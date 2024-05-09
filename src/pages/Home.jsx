import React, { useState } from 'react'

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
      <h2>Hi, my name is <span>{personalInfo.firstName + ' ' + personalInfo.lastName}</span></h2>
      <h3>I am a <span>{titles[selectedTitle]}</span></h3>
    </div>
  )
}

export default Home
