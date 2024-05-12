import React from 'react'
import '../styles/TechStack.css'

const TechStack = () => {
  const frontend = [
    {name: 'Javascript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
    {name: 'HTML', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png'},
    {name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'},
    {name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
    {name: 'React Native', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s'},
    {name: 'Sass', icon: 'https://sass-lang.com/assets/img/styleguide/seal-color.png'},
  ]

  const backend = [
    {name: 'SQL', icon: 'https://logowik.com/content/uploads/images/azure-sql-database6354.jpg'},
    {name: 'PostgreSQL', icon: 'https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png'},
    {name: 'Node.js', icon: 'https://www.svgrepo.com/download/303360/nodejs-logo.svg'},
    {name: 'Express', icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'},
    {name: 'REST API', icon: 'https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg'},
  ]

  return (
    <div className='skills-container'>
      {frontend.map((skill) => (
        <div className='icon-item'>
        <h4>{skill.name}</h4>
        <img src={skill.icon} className='img-icons'/>
        </div>
      ))}
      {backend.map((skill) => (
        <div className='icon-item'>
        <h4>{skill.name}</h4>
        <img src={skill.icon} className='img-icons'/>
        </div>
      ))}
    </div>
  )
}

export default TechStack
