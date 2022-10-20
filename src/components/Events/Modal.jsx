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
  if (!open) return null;
  return (
    <div className="overlay" onClick={() => setOpenModal((prev) => !prev)}>
      <div className="modal" onClick={() => setOpenModal((prev) => !prev)}>
        <VscClose
          className="close-btn"
          onClick={() => setOpenModal(prev => !prev)}
        />
        <h1 className="title">Squad Switch</h1>
        <p className="desc">Switcheroo is a coding challenge with a twist.</p>
        <div className="grid">
          <div className="item"><span>Team-type</span><IoIosPeople size={32} /><span>Team or Solo</span></div>
          <div className="item"><span>Venue</span><TiLocation size={32} /><span>CSE LH-01</span></div>
          <div className="item"><span>Timngs</span><FcAlarmClock size={32} /><span>9:00 - 10:00am</span></div>
          <div className="item"><span>Members</span><AiOutlineTeam size={32} /><span>4</span></div>
        </div>
        <h3>Rules and Regulations:</h3>
        <ol>
          <li>A fun event spanning over two rounds.</li>
          <li>Maximum participation 2 person per team.</li>
          <li>In the case of cheating, using of phone or using of any unnecessary gadgets will make the
            team disqualify.</li>
          <li>Shortlisted participants of Round-1 will appear for Round-2 for which above rules are
            applicable.</li>
        </ol>
        <h3>Round 1:</h3>
        <p>It’s a contest testing your abilities to work as a team. The competition not only examines your
          skills as to how well you coordinate with your partner but also how analytical you are in an isolated
          and tensed situation.</p>
        <h3>Round 2:</h3>
        <p>It’s a contest testing your abilities to work as a team. The competition not only examines your
          skills as to how well you coordinate with your partner but also how analytical you are in an isolated
          and tensed situation.</p>
        <h3>Judging Criteria:</h3>
        <ol>
          <li>A fun event spanning over two rounds.</li>
          <li>Maximum participation 2 person per team.</li>
          <li>In the case of cheating, using of phone or using of any unnecessary gadgets will make the
            team disqualify.</li>
          <li>Shortlisted participants of Round-1 will appear for Round-2 for which above rules are
            applicable.</li>
        </ol>
      </div>
    </div>
  );
};

export default Modal;
