import React from 'react'

import "../styling/Book.css"

import Car from "../images/car.png"
import Location from "../images/location.png"
import Calendar from "../images/calendar.png"

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

  console.log(search)
  
  return (
    <div className='book-a-car'>
      <form>
        <div>
          <div className='text'>
            <img src={Car} alt="" className='icon'/>
            <p>Select your car</p>
          </div>
          <input 
            type="text" 
            placeholder='Select your car'
            name='car'
            value={search.car}
            onChange={handleChange}
            />
        </div>
        <div>
          <div className='text'>
            <img src={Location} alt="" className='icon'/>
            <p>Pick-up</p>
          </div>
          <input 
            type="text" 
            placeholder='Select pick-up location'
            name='pickUpLocation'
            value={search.pickUpLocation}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className='text'>
            <img src={Location} alt="" className='icon'/>
            <p>Drop-off</p>
          </div>
          <input 
            type="text" 
            placeholder='Select drop-off location'
            name='dropOffLocation'
            value={search.dropOffLocation}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className='text'>
            <img src={Calendar} alt="" className='icon'/>
            <p>Pick-up</p>
          </div>
          <input 
            type="datetime" 
            placeholder='dd/mm/yyyy'
            name='pickUpDate'
            value={search.pickUpDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className='text'>
            <img src={Calendar} alt="" className='icon'/>
            <p>Drop-off</p>
          </div>
          <input 
            type="datetime"
            placeholder='dd/mm/yyyy'
            name='dropOffDate'
            value={search.dropOffDate}
            onChange={handleChange}
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Book