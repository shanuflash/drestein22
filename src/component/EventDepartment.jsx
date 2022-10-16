import React from 'react'
import EventCard from "../component/EventCard";

const EventDepartment = ({title, img}) => {
    return (
        <>
            <div className="top">
                <div className="title">{title}</div>
                <p className="catagory">Events</p>
            </div>
            <div className="wrapper">
                <EventCard img={img}/>
                <EventCard img={img}/>
                <EventCard img={img}/>
            </div>
            <div className="catagory">WorkShops</div>
            <div className="wrapper">
                <EventCard img={img}/>
                <EventCard img={img}/>
            </div>
        </>
    )
}

export default EventDepartment