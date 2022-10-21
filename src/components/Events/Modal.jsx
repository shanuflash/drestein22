import React, { useContext } from "react";
import "./styles/modal.scss";
import DisplayPopupContext from "../../context/DisplayPopupContext";
import { VscClose } from "react-icons/vsc";
import { TiLocation } from "react-icons/ti";
import { FcAlarmClock } from "react-icons/fc";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

const Modal = ({ open, setOpenModal }) => {
  const { eventObject } = useContext(DisplayPopupContext);
  const splitrules = eventObject?.rules?.split(".");
  const splitjudge = eventObject?.judge?.split(".");
  const splitround1 = eventObject?.round1?.split(".");
  const splitround2 = eventObject?.round2?.split(".");
  const splitround3 = eventObject?.round3?.split(".");

  if (!open) return null;
  return (
    <div className="overlay" onClick={() => setOpenModal((prev) => !prev)}>
      <div className="modal" onClick={() => setOpenModal((prev) => !prev)}>
        <VscClose
          className="close-btn"
          onClick={() => setOpenModal((prev) => !prev)}
        />
        {eventObject.name ? (
          <h1 className="title">{eventObject.name}</h1>
        ) : (
          <h1 className="title">Title not fetched from json</h1>
        )}
        {eventObject.desc ? (
          <p className="desc">{eventObject.desc}</p>
        ) : (
          <p className="desc">Disc not fetched from json</p>
        )}
        <div className="grid">
          <div className="item">
            <span>Type</span>
            <IoIosPeople size={32} />
            <span>{eventObject.type}</span>
          </div>
          <div className="item">
            <span>Venue</span>
            <TiLocation size={32} />
            <span>{eventObject.venue}</span>
          </div>
          <div className="item">
            <span>Timings</span>
            <FcAlarmClock size={32} />
            <span>{eventObject.time}</span>
          </div>
          <div className="item">
            <span>Members</span>
            <AiOutlineTeam size={32} />
            <span>{eventObject.members}</span>
          </div>
        </div>
        {eventObject.rules ? (
          <>
            <h3>Rules and Regulations:</h3>
            <ul>
              {splitrules.map((each) => {
                return <li>{each}</li>;
              })}
            </ul>
            <br />
          </>
        ) : null}
        {eventObject.round1 ? (
          <>
            <h3>Round 1:</h3>
            <ul>
              {splitround1.map((each) => {
                return <li>{each}</li>;
              })}
            </ul>
            <br />
          </>
        ) : null}
        {eventObject.round2 ? (
          <>
            <h3>Round 2:</h3>
            <ul>
              {splitround2.map((each) => {
                return <li>{each}</li>;
              })}
            </ul>
            <br />
          </>
        ) : null}
        {eventObject.round3 ? (
          <>
            <h3>Round 3:</h3>
            <ul>
              {splitround3.map((each) => {
                return <li>{each}</li>;
              })}
            </ul>
            <br />
          </>
        ) : null}
        {eventObject.round4 ? (
          <>
            <h3>Round 4:</h3>
            <ul>
              {splitround3.map((each) => {
                return <li>{each}</li>;
              })}
            </ul>
            <br />
          </>
        ) : null}
        {eventObject.judge ? (
          <>
            <h3>Judging Criteria:</h3>
            <ul>
              {splitjudge.map((each) => {
                return <li>{each}</li>;
              })}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
