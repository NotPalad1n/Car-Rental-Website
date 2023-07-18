import React from 'react'

import "../styling/Book.css"

import Car from "../images/car.png"
import Location from "../images/location.png"
import Calendar from "../images/calendar.png"

import Vehiclefleet from '../data/VehicleFleet'
import Locations from '../data/Locations'

const Book = () => {
  const [search, setSearch] = React.useState(
    {
      car:"",
      pickUpLocation:"",
      dropOffLocation:"",
      pickUpDate:"",
      dropOffDate:""
    }
  )

  const [fleet, setFleet] = React.useState(Vehiclefleet)
  const [locations , setLocations] = React.useState(Locations)
  
  function handleChange(event){
    setSearch(
      prevInfo => {
        return(
          {
            ...prevInfo,
            [event.target.name] : event.target.value
          }
        )
      }
    )
  }

  const arsenalElements = fleet.map(
    car => (<option key={car.id} value={car.name}>{car.name}</option>)
  )

  const locationElements = locations.map(
    location => (<option key={location.id} value={location.name}>{location.name}</option>)
  )

  console.log(search)
  
  return (
    <div className='container' id='Book'>
      <div className='book-a-car'>
        <h1>Book a car</h1>
        <form>
          <div>
            <div className='text'>
              <img src={Car} alt="" className='icon'/>
              <p>Select your car <span>*</span></p>
            </div>
            <select
              className='input'
              value={search.car}
              name='car'
              onChange={handleChange}
            >
              <option value="">Select your car</option>
              {arsenalElements}
            </select>
          </div>
          <div>
            <div className='text'>
              <img src={Location} alt="" className='icon'/>
              <p>Pick-up <span>*</span></p>
            </div>
            <select 
              name='pickUpLocation'
              value={search.pickUpLocation}
              onChange={handleChange}
              className='input'
            >
              <option value="">Select pick-up location</option>
              {locationElements}
            </select>
          </div>
          <div>
            <div className='text'>
              <img src={Location} alt="" className='icon'/>
              <p>Drop-off <span>*</span></p>
            </div>
            <select 
              name='dropOffLocation'
              value={search.dropOffLocation}
              onChange={handleChange}
              className='input'
            >
              <option value="">Select drop-off location</option>
              {locationElements}
            </select>
          </div>
          <div>
            <div className='text'>
              <img src={Calendar} alt="" className='icon'/>
              <p>Pick-up <span>*</span></p>
            </div>
            <input 
              type="datetime" 
              placeholder='dd/mm/yyyy'
              name='pickUpDate'
              value={search.pickUpDate}
              onChange={handleChange}
              className='input'
            />
          </div>
          <div>
            <div className='text'>
              <img src={Calendar} alt="" className='icon'/>
              <p>Drop-off <span>*</span></p>
            </div>
            <input 
              type="datetime"
              placeholder='dd/mm/yyyy'
              name='dropOffDate'
              value={search.dropOffDate}
              onChange={handleChange}
              className='input'
            />
          </div>
          <button>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Book