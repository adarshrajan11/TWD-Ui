import React from 'react'
import logo from '../assets/TWDLogo.jpg'
import Login from './Login'
const NavbarComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='navbar'>
      {/* <img src={logo} alt='Banner 2' /> */}
      <ul className='nav-content'>
        <li className='homeNav'>
          <a href='Home'></a>Home
        </li>
        <li>
          <a href='Plan-your-visit'></a>Plan Your Visit
        </li>
        <li>
          <a href='About-reserve'></a>About Reserve
        </li>
        <li>
          <a href='Contact-us'></a>Contact Us
        </li>
        <li>
          <Login />
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent
