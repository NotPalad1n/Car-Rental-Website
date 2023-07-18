import React from 'react'

import "../styling/Footer.css"

import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons'>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div>
          <a href="#">Info</a>
          <a href="#">Support</a>
          <a href="#">Marketing</a>
        </div>
        <div>
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
        </div>
        <p>© 2023 Car Rental</p>
    </div>
  )
}

export default Footer