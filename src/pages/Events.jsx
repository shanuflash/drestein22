import React from "react";
import Nav from "../component/Nav";
import "../styles/events.css";
import { product } from "../configsFiles/EventDetails";
import EventCard from "../component/EventCard";

const Events = () => {
  return (
    <div className="event-page">
      <Nav />
      <div className="event-container">
        {product.map((EachDept) => (
          <>
            <div className="top">
              <div className="title">{EachDept.title}</div>
            </div>
            <div className="wrapper">
              {EachDept.eventslist.map((EachEvent) => (
                <EventCard {...EachEvent} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Events;
