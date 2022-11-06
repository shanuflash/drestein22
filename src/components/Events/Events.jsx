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
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModal]);

  return (
    <>
      <Modal open={openModal} setOpenModal={setOpenModal} />
      <div className="event-page" id="#">
        <Nav />
        <div className="event-container">
          {EventDetails.map((EachDept) => {

            return (
              <>
                <div className="top" id={EachDept.id}>
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
                    {EachDept.workshopslist && EachDept.workshopslist.map(data=>{
                      return <EventCard {...data}  />
                    })
                  }
                  
                </div>
                
              </>
            );
          })}
          
        </div>
      </div>
    </>
  );
};

export default Events;
