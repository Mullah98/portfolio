import React from 'react'
import '../styles/Contact.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => {
  return (
    <div className='contact-container'>

      <div className='main-container'>
        <p>Feel free to reach out to discuss potential <span>opportunities</span>, <span>collaborations</span>, or just to <span>connect</span></p>
      </div>

      <div className='button-container'>
        <a href='https://github.com/Mullah98' target='_blank'><button>
        <GitHubIcon style={{fontSize: 65}} /><h3 className='h3-contact'>GitHub</h3>
        </button></a>

        <a href='https://www.linkedin.com/in/ibrahim-ullah-380972284' target='_blank'><button>
        <LinkedInIcon style={{fontSize: 65}} /><h3 className='h3-contact'>LinkedIn</h3>
        </button></a>

        <a href='mailto:ibz_374@hotmail.com' target='_blank'><button>
        <EmailIcon style={{fontSize: 65}} /><h3 className='h3-contact'>ibz_374@hotmail.com</h3>
        </button></a>
      </div>

      <footer className='footer'>
        <div className='container'>
          <p>Designed and developed by Ibrahim Ullah</p>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default Contact
