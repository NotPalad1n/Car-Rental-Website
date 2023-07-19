import React from 'react'
import { HashLink } from 'react-router-hash-link'

import "../styling/Navbar.css"

import Logo from "../images/logo.png"

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false)
  
  function toggle(){
    setIsClicked(!isClicked)
  }
  
  return (
    <div className={isClicked ? "navbar toggle" : "navbar"}>
        <img src={Logo} alt="logo" />
        <ul className={isClicked ? "nav-links active" : "nav-links"}>
            <li><HashLink to="#Home" onClick={toggle}>Home</HashLink></li>
            <li><HashLink to="#Book" onClick={toggle}>Book a Car</HashLink></li>
            <li><HashLink to="#Services" onClick={toggle}>Services</HashLink></li>
            <li><HashLink to="#Fleet" onClick={toggle}>Vehicle Models</HashLink></li>
            <li><HashLink to="#Get-in-Touch" onClick={toggle}>Get in Touch</HashLink></li>
        </ul>
        <ul className={isClicked ? "nav-auth active" : "nav-auth"}>
            <li><a href="#">Sign In</a></li>
            <li><button className='register'>Register</button></li>
        </ul>
        <div className="hamburger-button" onClick={toggle}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
    </div>
  )
}

export default Navbar