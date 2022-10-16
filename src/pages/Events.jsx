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
        {product.map((data) => (
          <>
            <div className="top">
              <div className="title">{data.title}</div>
            </div>
            <div className="wrapper">
              {data.eventslist.map((datas) => (
                <EventCard {...datas} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Events;
