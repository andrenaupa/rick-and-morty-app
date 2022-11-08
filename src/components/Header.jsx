import React from 'react'
import hero from '../assets/hero.svg'
import title from '../assets/title.svg'

const Header = () => {
  return (
    <div className='header'>
      <img className='header__title' src={title} alt="" />
    </div>
  )
}

export default Header