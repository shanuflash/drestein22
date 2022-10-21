import { createContext } from "react";
import { useState } from "react";
const DisplayPopupContext = createContext();

export const DisplayPopupProvider = ({ children }) => {
  const [eventObject, setEventObject] = useState({
    name: "error",
    desc: "error",
    date: "error",
    rules: "error",
    type: "error",
    venue: "error",
    time: "error",
    members: "error",
    round1: "error",
    round2: "error",
    round3: "error",
    round4: "error",
    judge: "error",
  });
  return (
    <DisplayPopupContext.Provider
      value={{
        eventObject,
        setEventObject,
      }}
    >
      {children}
    </DisplayPopupContext.Provider>
  );
};

export default DisplayPopupContext;
