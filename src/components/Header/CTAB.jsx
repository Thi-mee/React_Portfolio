import React from 'react'
import CV from '../../assets/MyResume.docx'

const CTAB = () => {
  return (
    <div className='ctab'>
      <a href={CV} download className='light'> My Resume </a>
      <a href="#contact-me" className='bold'> Contact Me </a>
    </div>
  )
}

export default CTAB