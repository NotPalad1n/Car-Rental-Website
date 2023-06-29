import React from 'react'

import "../styling/Fleet.css"

import CarCard from './CarCard'
import VehicleFleet from '../data/VehicleFleet'

const Fleet = () => {
    const [cars, setCars] = React.useState(VehicleFleet)

    const carElements = cars.map(
        car => <CarCard key = {car.id} car = {car}/>
    )
  
    return (
        <div className='fleet'>
            <p className='subtext'>Vehicle models</p>
            <h1 className='title'>Our rental fleet</h1>
            <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            <div className='vehicle-list'>
                {carElements}
            </div> 
        </div>
    )
}

export default Fleet

