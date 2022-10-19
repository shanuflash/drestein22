import styled from "styled-components";
import "./styles/test.css";
import { useContext } from "react";
import DisplayPopupContext from "../../context/DisplayPopupContext";

const EventCard = ({ name, desc, img, tag, date, setOpenModal }) => {
  const { setEventObject } = useContext(DisplayPopupContext);

  const handleEventInfo = () => {
    setOpenModal((prev) => !prev);
    // Onclick the card setting the event details in the DisplayPopupContext.
    setEventObject({
      name,
      date,
      desc,
    });
  };

  const Card = styled.a`
    font-family: "poppins", sans-serif;
    --bg-filter-opacity: 0.5;
    --bg-img: url(${img});
    background-image: linear-gradient(rgba(0, 0, 0, var(--bg-filter-opacity)), rgba(0, 0, 0, var(--bg-filter-opacity))), var(--bg-img);
    height: 15em;
    width: 12em;
    font-size: 1.5em;
    color: white;
    border-radius: 1em;
    padding: 1em;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 2em -1em black;
    transition: all, 0.5s;
    position: relative;
    overflow: hidden;
    text-decoration: none;
  `;
  return (
    <div className="event-card">
      <Card className="eventcard" href="#" onClick={handleEventInfo}>
        <div>
          <h1>{name}</h1>
          <p>{desc}</p>
          <div className="date">{date}</div>
          <div className="tags">
            <div className="tag">{tag}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EventCard;
