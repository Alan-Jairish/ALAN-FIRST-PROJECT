import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='container dark-nav'>
      <img src='./images/logo.png' className='logo' alt=""/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact US</button></li>
      </ul>
      <img src='./images/menu-icon.png' className='menu-icon'/>
    </nav>
  )
}

export default Navbar

