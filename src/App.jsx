import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Brands from './components/Brands'
import Book from './components/Book'
import Service from './components/Service'
import Fleet from './components/Fleet'

import "./styling/App.css"

const App = () => {
  return (
    <div className='app'>
       <Navbar/>
       <Banner/>
       <Brands/>
       <Book/>
       <Service/>
       <Fleet/>
    </div>
  )
}

export default App