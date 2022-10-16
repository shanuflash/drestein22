import React from "react";
import Nav from "../component/Nav";
import "../styles/events.css";
import { EventDetails } from "../configsFiles/EventDetails";
import EventCard from "../component/EventCard";

const Events = () => {
  return (
    <div className="event-page">
      <Nav />
      <div className="event-container">
        {EventDetails.map((EachDept) => {
          return (
            <>
              <div className="top">
                <div className="title">{EachDept.title}</div>
              </div>
              <div className="wrapper">
                {EachDept.eventslist.map((EachEvent) => {
                  return <EventCard {...EachEvent} />;
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
