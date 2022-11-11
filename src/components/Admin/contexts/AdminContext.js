import { getAuth, onAuthStateChanged } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { db } from "../../../configs/Firebase.config";
import countapi from 'countapi-js';
import { collection, getDocs, onSnapshot, snapshotEqual } from "firebase/firestore";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const auth = getAuth();
  const [loggedIn, setLoggedIn] = useState(auth.currentUser);
  const [RegUsers,setRegUsers] = useState([])
  const [DataLoad,setDataLoad] = useState(true)
  const [vicitedProple,setVisitedPeople] = useState(0)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoggedIn(user);
    });
  }, [auth, auth?.currentUser]);

useEffect(()=>{
  const colref = collection(db,'RegisteredPeople')
  onSnapshot(colref,(snapshot)=>{
    let users = [];
  
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    setRegUsers(users)
    setDataLoad(false)
   
  })
  // const WebsiteVisits=(response)=>{
  //   console.log(response)
  //   }
    // WebsiteVisits()
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", "https://api.countapi.xyz/hit/drestein.in/awesomeclick");
  // xhr.responseType = "json";
  // xhr.onload = function() {
  //   setVisitedPeople(this.response.value)
  // }
  // xhr.send();

  // const View  = fetch('https://api.countapi.xyz/hit/drestein.in')
  // .then(response=>console.log(response))
  // countapi.visits('drestein.in').then((result) => {
  //   setVisitedPeople(result.value)
  // });
  // countapi.get('drestein.in', 'test').then((result) => { console.log(result) });

},[])

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        RegUsers,
        DataLoad,
        vicitedProple
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
