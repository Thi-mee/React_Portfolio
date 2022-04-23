import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {IoBookSharp} from 'react-icons/io5'
import {FaParachuteBox} from 'react-icons/fa'
import { useState } from 'react'


const NavBar = () => {
  const[activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className= {activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact-me"  onClick={() => setActiveNav('#contact-me')} className={activeNav === '#contact-me' ? 'active' : ''}><FaUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><IoBookSharp/></a>
      <a href="#parachute" onClick={() => setActiveNav('#parachute')} className={activeNav === '#parachute' ? 'active' : ''}><FaParachuteBox/></a>
    </nav>
  )
}

export default NavBar