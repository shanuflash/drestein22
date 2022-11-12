import { getAuth, onAuthStateChanged } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { db } from "../../../configs/Firebase.config";
import countapi from "countapi-js";
import {
  collection,
  getDocs,
  onSnapshot,
  snapshotEqual,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { CollectionsOutlined } from "@mui/icons-material";
import { useRef } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const auth = getAuth();
  const [loggedIn, setLoggedIn] = useState(auth.currentUser);
  const [RegUsers, setRegUsers] = useState([]);
  const [DataLoad, setDataLoad] = useState(true);
  const [vicitedProple, setVisitedPeople] = useState(0);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoggedIn(user);
    });
  }, [auth, auth?.currentUser]);

  const FetchUsers = () => {
    const colref = collection(db, "RegisteredPeople");
    console.log("backend fectch  running ... ");
    onSnapshot(colref, (snapshot) => {
      let users = [];

      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setRegUsers(users)
      setDataLoad(false)
     
    })
  }
useEffect(()=>{
if(dataFetchedRef.current) return ;
dataFetchedRef.current=true;
if(loggedIn){
  FetchUsers()

}
 

},[])

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        RegUsers,
        DataLoad,
        vicitedProple,
        auth
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
