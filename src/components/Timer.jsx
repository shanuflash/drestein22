import React from "react";
import "../App.css";
import { CountDownDaily } from "@nilevia/count-down-timer-react";

const Timer = () => {
  return (
    <div className="time">
      <CountDownDaily
        endDate={"2022-11-10T06:50:18.346-05:30"}
        dayAffix="day"
        hourAffix="hrs"
        minutesAffix="min"
        secondAffix="sec"
        operator=" "
      />
    </div>
  );
};

export default Timer;
