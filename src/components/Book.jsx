import React from 'react'

import "../styling/Book.css"

const Book = () => {
  return (
    <div className='book-a-car'>
      <form>
      <div>
        <p>Select your car</p>
        <input type="text" placeholder='Select your car'/>
      </div>
      <div>
        <p>Pick-up</p>
        <input type="text" placeholder='Select pick-up location'/>
      </div>
      <div>
        <p>Drop-off</p>
        <input type="text" placeholder='Select drop-off location'/>
      </div>
      <div>
        <p>Pick-up</p>
        <input type="datetime" name="" id="" placeholder='dd/mm/yyyy'/>
      </div>
      <div>
        <p>Drop-off</p>
        <input type="datetime" name="" id="" placeholder='dd/mm/yyyy'/>
      </div>
      <button>Search</button>
    </form>
    </div>
  )
}

export default Book