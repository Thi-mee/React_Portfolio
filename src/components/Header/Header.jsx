import React from 'react'
import './header.css'
import ME from '../../assets/easy.jpg'
import CTAB from './CTAB.jsx'


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div>
          <h1>My Name is<br/><span className='accent'>Sonia Akintunde</span></h1>
          <h2>A Software developer</h2>
          <CTAB />
        </div>
      </div>
    </header>
  )
}

export default Header