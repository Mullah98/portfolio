import React from 'react';
import '../styles/Projects.css';
import backendProject from '../assets/backend-project.png';
import frontendProject from '../assets/frontend-project.png';
import travelogProject from '../assets/travelog-project.png';
import portfolioProject from '../assets/portfolio-project.png';
import carRentalProject from '../assets/eliteCarRental-project.png';
import myFootAppProject from '../assets/myfootapp-project.png';
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const projects = [
    {
      name: "Northcoders News",
      image: backendProject,
      description: "Backend project involved designing and implementing a dynamic API utilizing SQL, JEST and Test-driven Development methodologies. Hosted on Render to allow easy access for users.",
      demoLink: "https://nc-news-4rxh.onrender.com/api/",
      githubLink: "https://github.com/Mullah98/backend-nc-news"
    },
    {
      name: "Northcoders Market Place",
      image: frontendProject,
      description: "Frontend project for the Northcoders News backend project. A website for social news collection and discussions. Developed using React and implementing CRUD functionality for a user-friendly and interactive experience. Deployed the website on Netlify for seamless user accessibility.",
      demoLink: "https://northcoders-marketplace.netlify.app/",
      githubLink: "https://github.com/Mullah98/frontend-nc-news"
    },
    {
      name: 'Travelog App',
      image: travelogProject,
      description: "Collaborated with 5 other members to develop a travel diary mobile app which allows users to document their holiday journeys through photos and destination logs. Within 3 weeks, we had to plan, develop and present the app to other mentors. Tech stack used: React Native, Firebase and Expo Go.",
      demoLink: "https://northcoders.com/project-phase/travelog",
      githubLink: "https://github.com/Mullah98/TraveLog"
    },
    {
      name: 'Personal Portfolio',
      image: portfolioProject,
      description: "You are currently on this project",
      githubLink: "https://github.com/Mullah98/portfolio"
    },
    {
      name: 'Elite Car Rental',
      image: carRentalProject,
      description: "Developed a frontend website using Vue.js. Users are provided a platform which allows a seamless selection of supercars to choose from, with dynamic options for dates, times and rental durations.",
      demoLink: "https://elite-car-rental.netlify.app/",
      githubLink: "https://github.com/Mullah98/Car-Rental-app"
    },
    {
      name: 'My Footy App',
      image: myFootAppProject,
      description: "Coming soon...."
    }
  ];

  return (
    <div className='project-container'>
      <div className='flex'>
        {projects.map((project, index) => (
          <div className='project' key={index}>
            <div className='project-grid'>
              <h3>{project.name}</h3>
              <div className='image-container'>
                <img src={project.image} className='project-img' alt={project.name} />
                <div className='hover'>
                  <p>{project.description}</p>
                <a href={project.demoLink} target='_blank' rel="noopener noreferrer"><button>Link to live demo</button></a>
                <a href={project.githubLink} target='_blank' rel="noopener noreferrer"><button className='github'><GitHubIcon style={{ fontSize: 40 }} /></button></a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className='more-container'>
        <a href='https://github.com/Mullah98' target='_blank' rel="noopener noreferrer"><button className='more'>More projects here</button></a>
      </div>
    </div>
  );
}

export default Projects;
