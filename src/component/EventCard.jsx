import React from 'react'
import '../styles/event-card.scss'
const EventCard = ({img}) => {
  return (
    <div className='event-card'>
      <img src={img} alt="" />
      <div className="description">
        <div className="title">Gymnastics</div>
        <div className="one-line-desc">Lorem ipsum dolor sit amet consectetur adipisi cing elit.</div>
      </div>
    </div>
  )
}

export default EventCard