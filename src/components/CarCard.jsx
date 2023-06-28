import React from 'react'

import "../styling/CarCard.css"

import location from "../images/location.png"

const CarCard = (props) => {
  return (
    <div className='carCard'>
        <img src={require("../images/fleet/" + props.car.image + ".jpg")} alt="" />
        <div className='info'>
            <p className='price'><span>$</span> {props.car.price} /day</p>
            <div className='location'>
                <img src={location} alt="" className='icon'/>
                <p>{props.car.location}</p>
            </div>
        </div>
        <p className='name'>{props.car.name}</p>
        <button>Book now</button>
    </div>
  )
}

export default CarCard