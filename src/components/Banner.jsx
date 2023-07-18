import React from 'react'

import "../styling/Banner.css"

import Porsche from "../images/PorscheCut.png"
import Map from "../images/map.png"

const Banner = () => {
  return (
    <div className='banner' id='Home'>
        <div className='text'>
            <h1>Save <span>big</span> with our car rental</h1>
            <p>Drive the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more</p>
            <div className='buttons'>
                <button className='book'>Book Ride</button>
                <button className='learn'>Learn More</button>
            </div>
        </div>
        <img src={Map} alt="" className='banner-background'/>
        <img src={Porsche} alt="" className='banner-image'/>
    </div>
  )
}

export default Banner