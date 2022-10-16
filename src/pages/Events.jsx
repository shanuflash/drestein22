import React from "react";
import Nav from "../component/Nav";
import "../styles/events.css";
import { EventsDetails } from "../configsFiles/EventDetails";
import EventCard from "../component/EventCard";
// import EventDepartment from "../component/EventDepartment";

const Events = () => {
  return (
    <div className="event-page">
      <Nav />
      <div className="event-container">
        {EventsDetails.map((EachDept) => {
          return (
            <>
              <div className="top">
                <div className="title">{EachDept.title}</div>
              </div>
              <div className="wrapper">
                {EventsDetails.map((EachEvent) => {
                  console.log(EachEvent);
                  return <EventCard {...EachEvent.events} />;
                })}
              </div>
            </>
          );
          // return <EventDepartment title={EachDept.title} />;
        })}
      </div>
    </div>
  );
};

export default Events;
