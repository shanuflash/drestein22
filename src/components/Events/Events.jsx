import Nav from "../Nav/Nav";
import "./styles/events.scss";
import { EventDetails } from "../../configs/EventDetails";
import EventCard from "./EventCard";

import React, { useState, useEffect } from "react";
import Modal from "./Modal.jsx";

const Events = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    openModal
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset'

  }, [openModal])
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
