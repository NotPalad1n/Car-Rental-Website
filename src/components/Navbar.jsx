import React from 'react'
import { HashLink } from 'react-router-hash-link'

import "../styling/Navbar.css"

import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo" />
        <ul>
            <li><HashLink to="#Home">Home</HashLink></li>
            <li><HashLink to="#Book">Book a Car</HashLink></li>
            <li><HashLink to="#Services">Services</HashLink></li>
            <li><HashLink to="#Fleet">Vehicle Models</HashLink></li>
            <li><HashLink to="#Get-in-Touch">Get in Touch</HashLink></li>
        </ul>
        <ul>
            <li><a href="#">Sign In</a></li>
            <li><button className='register'>Register</button></li>
        </ul>
    </div>
  )
}

export default Navbar