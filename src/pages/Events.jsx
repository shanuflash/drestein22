import React from "react";
import Nav from "../component/Nav";
import "../styles/events.css";
import Card from "../component/Card";
const Events = () => {
  return (
    <div className="events">
      <Nav />
      <div className="container">
        <p className="title">Computer Science & Engineering</p>
        <Card />
      </div>
    </div>
  );
};

export default Events;
