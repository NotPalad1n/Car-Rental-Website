import React from 'react'

import "../styling/ServiceCard.css"

const ServiceCard = (props) => {
  return (
    <div className='card'>
        <div className='coloredband'></div>
        <img src={require("../images/service/" + props.icon + ".png")} alt="" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default ServiceCard