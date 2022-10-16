import React from 'react'

const DeparmentEvents = () => {
    return (
        <>
            <div>
                <div className="title">Computer Science & Engineering</div>
                <p className="catagory">Events</p>
            </div>
            <div className="wrapper">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className="catagory">WorkShops</div>
            <div className="wrapper">
                <EventCard />
                <EventCard />
            </div>
        </>
    )
}

export default DeparmentEvents