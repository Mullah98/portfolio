import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {
const { pathname } = useLocation();
const [expandNavBar, setExpandNavBar] = useState(false)

useEffect(() => {
  setExpandNavBar(false)
}, [pathname])

  return (
    <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button onClick={()=> setExpandNavBar((prev) => !prev)}>
        <ReorderIcon style={{fontSize:50}}/> 
        </button>
      </div>
      <div className='links'>
        <Link to='/' className={`item ${pathname === '/' ? 'active-link' : ''}`}>Home</Link>
        <Link to='/skills' className={`item ${pathname === '/skills' ? 'active-link' : ''}`}>Tech Skills</Link>
        <Link to='/projects' className={`item ${pathname === '/projects' ? 'active-link' : ''}`}>Projects</Link>
        <Link to='/experience' className={`item ${pathname === '/experience' ? 'active-link' : ''}`}>Experience</Link>
        <Link to='/contact' className={`item ${pathname === '/contact' ? 'active-link' : ''}`}>Contact me</Link>
      </div>
    </div>
  )
}

export default Navbar
