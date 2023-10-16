import React, { useState } from 'react'
import logo from '../assets/TWDLogo.jpg'
import Login from './Login'

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log('Hamburger Clicked')
  }
  console.log('isOpen:', isOpen)
  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      {/* Hamburger Menu Icon */}
      <div className='hamburger' onClick={handleToggle}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className='nav-content '>
        <li className='homeNav'>
          <a href='Home'></a>HOME
        </li>
        <li>
          <a href='Plan-your-visit'></a>PLAN YOUR VISIT
        </li>
        <li>
          <a href='About-reserve'></a>ABOUT RESERVE
        </li>
        <li>
          <a href='Contact-us'></a>CONTACT US
        </li>
        <li>
          <Login />
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent
