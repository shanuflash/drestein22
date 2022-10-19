import {  createContext } from "react";
import { useState } from "react";
const DisplayPopupContext = createContext();

export const DisplayPopupProvider = ({children}) => {
    const [eventObject, setEventObject] = useState({
        name: 'dummy',
        desc: 'lorem',
        date: 'November 11'
    })
  return (
    <DisplayPopupContext.Provider value={{
        eventObject,
        setEventObject
    }}>
      {children}
    </DisplayPopupContext.Provider>
  );
};

export default DisplayPopupContext
