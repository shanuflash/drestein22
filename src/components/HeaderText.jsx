import React from "react";
import "./Header.css";
function HeaderText() {
  return (
    <div className="main_header">
      <div className="header_bg w3-container w3-center w3-padding-48 ">
        <div className="header_main_text ">
          <p className="drestein">
            <span className="let_1">DR</span>eam d
            <span className="let_2">ES</span>ign
            <br />
            compete<span className="let_3">TE</span> w
            <span className="let_4">IN</span>
          </p>
          <h3 className="nation">
            13TH NATIONAL LEVEL INTER COLLEGIATE TECHNICAL AND MANAGEMENT FEST
          </h3>
        </div>
        <div className="timer">
          12<span>days</span> 35<span>hrs</span>
          <br /> 45<span>mins</span>
        </div>
      </div>
      <div className="header_btn">
        <button className="register_now">
          <span>register now</span>
        </button>
      </div>
    </div>
  );
}

export default HeaderText;
