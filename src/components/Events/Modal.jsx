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
  const { rulesAndReg } = eventObject
  const splitedSentence = rulesAndReg.split('.')

  if (!open) return null;
  return (
    <div className="overlay" onClick={() => setOpenModal((prev) => !prev)}>

      <div className="modal" onClick={() => setOpenModal((prev) => !prev)}>
        <VscClose
          className="close-btn"
          onClick={() => setOpenModal(prev => !prev)}
        />
        <h1 className="title">{eventObject.name}</h1>
        <p className="desc">{eventObject.desc}</p>
        <div className="grid">
          <div className="item"><span>Team-type</span><IoIosPeople size={32} /><span>Team or Solo</span></div>
          <div className="item"><span>Venue</span><TiLocation size={32} /><span>CSE LH-01</span></div>
          <div className="item"><span>Timngs</span><FcAlarmClock size={32} /><span>9:00 - 10:00am</span></div>
          <div className="item"><span>Members</span><AiOutlineTeam size={32} /><span>4</span></div>
        </div>
        {eventObject.rulesAndReg
          ? (
            <>
              <h3>Rules and Regulations:</h3>
              <ol>
                {
                  splitedSentence.map(each => {
                    return <li>{each}</li>
                  })
                }
              </ol>
            </>
          )
          : null
        }
        {eventObject.round1
          ? (
            <>
              <h3>Round 1:</h3>
              <p>{eventObject.round1}</p>
            </>
          )
          : null
        }
        {eventObject.round2
          ? (
            <>
              <h3>Round 2:</h3>
              <p>{eventObject.round2}</p>
            </>
          )
          : null
        }
        {eventObject.round3
          ? (
            <>
              <h3>Round 3:</h3>
              <p>{eventObject.round3}</p>
            </>
          )
          : null
        }
        {eventObject.round4
          ? (
            <>
              <h3>Round 4:</h3>
              <p>{eventObject.round4}</p>
            </>
          )
          : null
        }

      </div>
    </div>
  );
};

export default Modal;
