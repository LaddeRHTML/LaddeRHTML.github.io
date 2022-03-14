import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/roman-pshenichnyy-b3a2b5213/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/LaddeRHTML" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials