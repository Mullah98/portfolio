import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../src/styles/Home.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import TechStack from './pages/TechStack.jsx'
import TechExp from './pages/TechExp.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<TechExp />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
