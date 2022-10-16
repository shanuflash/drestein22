import React from "react";
import Nav from "../component/Nav";
import "../styles/events.css";
import { EventsDetails } from '../configsFiles/EventDetails'
import EventDepartment from "../component/EventDepartment";


const Events = () => {
  return (
    <div className="event-page">
      <Nav />
      <div className="event-container">
        {
          EventsDetails.map((EachDept) => {
            return (
              <EventDepartment
                title={EachDept.title}
                img={EachDept.img} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Events;
