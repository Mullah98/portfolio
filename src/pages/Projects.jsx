import React from 'react'
import '../styles/Projects.css'
import backendProject from '../assets/backend-project.png'
import frontendProject from '../assets/frontend-project.png'
import travelogProject from '../assets/travelog-project.png'

const Projects = () => {
  const ncNews = [
    {name: "Northcoders News", image: backendProject}
  ]

  const ncMarketPlace = [
    {name: "Northcoders Market Place", image: frontendProject}
  ]

  const travelog = [
    {name: 'Travelog App', image: travelogProject}
  ]

  return (
    <div className='project-container'>

    <div className='project backend'>
      {ncNews.map((project) => (
        <div className='project-grid'>
        <h3>{project.name}</h3>
        <img src={project.image} className='project-img'></img>
        <div className='project-btn'>
        <button>Link to website</button>
        <button>Link to github</button>
        </div>
      </div>
      ))}
    </div>

    <div className='project frontend'>
      {ncMarketPlace.map((project) => (
        <div className='project-grid'>
        <h3>{project.name}</h3>
        <img src={project.image} className='project-img'></img>
        <div className='project-btn'>
        <button>Link to website</button>
        <button>Link to github</button>
        </div>
      </div>
      ))}
    </div>

    <div className='project travelog'>
      {travelog.map((project) => (
        <div className='project-grid'>
        <h3>{project.name}</h3>
        <img src={project.image} className='project-img'></img>
        <div className='project-btn'>
        <button>Link to website</button>
        <button>Link to github</button>
        <button>Link to demo</button>
        </div>
      </div>
      ))}
    </div>


    </div>
  )
}

export default Projects
