import React from 'react'

import "../styling/Navbar.css"

import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Vehicle Models</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <ul>
            <li><a href="#">Sign In</a></li>
            <li><button className='register'>Register</button></li>
        </ul>
    </div>
  )
}

export default Navbar