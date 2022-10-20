import React, { useEffect, useState } from "react";

const CountDown = () => {
  const end = new Date();
  end.setFullYear(2022);
  end.setMonth(10);
  end.setDate(3);
  end.setHours(0);
  end.setMinutes(0);

  const [daysDiff, setdaysDiff] = useState(0);
  const [hoursDiff, sethoursDiff] = useState(0);
  const [minutesDiff, setminutesDiff] = useState(0);
  const [secondsDiff, setsecondsDiff] = useState(0);

  useEffect(() => {
    if (end.getTime() - new Date().getTime() > 0) {
      const timer = setInterval(() => {
        const msDiff = end.getTime() - new Date().getTime();

        const daysDiff = Math.trunc(msDiff / (1000 * 3600 * 24));
        setdaysDiff(daysDiff);
        sethoursDiff(23 - new Date().getHours());
        setminutesDiff(59 - new Date().getMinutes());
        setsecondsDiff(59 - new Date().getSeconds());
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  });

  return (
    <div className="">
      <div className="">{daysDiff} Days</div>
      <div className="">
        {hoursDiff}
        Hours
      </div>
      <div className="">
        {minutesDiff}
        Minutes
      </div>
      <div className="">
        {secondsDiff}
        Seconds
      </div>
    </div>
  );
};

export default CountDown;
