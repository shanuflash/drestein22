import React, { useState } from "react";
import "./counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Counter = ({ ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <div className="counter">
      <div className="counter-row">
        <div className="counter-column">
          <strong data-number="53">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={53}>
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) =>
                      isVisible ? setViewPortEntered(true) : null
                    }
                    delayedCall
                  >
                    <span className="number" ref={countUpRef} />
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </strong>
          <span>
            Total <br /> Events{" "}
          </span>
        </div>
        <div className="counter-column">
          <strong data-number="5+">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={5}>
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) =>
                      isVisible ? setViewPortEntered(true) : null
                    }
                    delayedCall
                  >
                    <span className="number" ref={countUpRef} />
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </strong>
          <span>
            Lakhs+ <br /> Prizes{" "}
          </span>
        </div>
        <div className="counter-column">
          <strong data-number="28+">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={28}>
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) =>
                      isVisible ? setViewPortEntered(true) : null
                    }
                    delayedCall
                  >
                    <span className="number" ref={countUpRef} />
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </strong>
          <span>
            On Going <br /> Workshops{" "}
          </span>
        </div>
        <div className="counter-column">
          <strong data-number="305">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) =>
                      isVisible ? setViewPortEntered(true) : null
                    }
                    delayedCall
                  >
                    <span className="number" ref={countUpRef} />
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </strong>
          <span>
            On Going <br /> Projects{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
