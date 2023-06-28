import React from 'react'

import "../styling/Service.css"

import ServiceCard from './ServiceCard'

import ServiceCardsData from '../data/ServiceCardsData'

const Service = () => {
  const [cards, setCards] = React.useState(ServiceCardsData)
  
  const cardElements = cards.map(
    card => (
    <ServiceCard 
      key={card.id}  
      icon={card.icon}
      title={card.title}
      description={card.description}
    />
    )
  )

  return (
    <div className='service'>
        <p className='subtext'>Plan your trip now</p>
        <h1 className='title'>Quick & easy car rental</h1>
        <div className='cards'>
          {cardElements}
        </div>
        
    </div>
  )
}

export default Service