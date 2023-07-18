import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Brands from './components/Brands'
import Book from './components/Book'
import Service from './components/Service'
import Fleet from './components/Fleet'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

import "./styling/App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <Banner/>
        <Brands/>
        <Book/>
        <Service/>
        <Fleet/>
        <GetInTouch/>
        <Footer/>
      </div>
    </BrowserRouter>  
  )
}

export default App