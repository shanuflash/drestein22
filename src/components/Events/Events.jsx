import Nav from "../Nav/Nav";
import "./styles/events.css";
import { EventDetails } from "../../configs/EventDetails";
import EventCard from "./EventCard";

import React, { useState, useContext } from "react";
import DisplayPopupContext from "../../context/DisplayPopupContext";
import Modal from "./Modal.jsx";

const Events = () => {
  const { eventObject } = useContext(DisplayPopupContext);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="event-page">
      <Nav />
      <Modal open={openModal} setOpenModal={setOpenModal} />
      <div className="event-container">
        {EventDetails.map((EachDept) => {
          return (
            <>
              <div className="top">
                <div className="title">{EachDept.title}</div>
              </div>
              <div className="wrapper">
                {EachDept.eventslist.map((EachEvent) => {
                  return (
                    <EventCard
                      key={EachEvent.id}
                      event={EachEvent}
                      {...EachEvent}
                      setOpenModal={setOpenModal}
                    />
                  );
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
