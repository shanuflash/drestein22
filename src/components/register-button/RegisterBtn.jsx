import React from "react";
import "./registerBtn.scss";
import { ImRocket } from "react-icons/im";
const RegisterBtn = () => {
  return (
    <div className="rbtn">
      Register{" "}
      <span>
        <ImRocket />
      </span>
    </div>
  );
};

export default RegisterBtn;
