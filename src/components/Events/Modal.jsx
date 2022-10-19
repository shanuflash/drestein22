import React, { useContext } from "react";
import "./styles/modal.scss";
import DisplayPopupContext from "../../context/DisplayPopupContext";
import { VscClose } from "react-icons/vsc";
const Modal = ({ open, setOpenModal }) => {
  const { eventObject } = useContext(DisplayPopupContext);
  if (!open) return null;
  return (
    <div className="overlay" onClick={() => setOpenModal((prev) => !prev)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <VscClose
          className="close-btn"
          onClick={() => setOpenModal((prev) => !prev)}
        />
        <h1>{eventObject.name}</h1>
      </div>
    </div>
  );
};

export default Modal;
