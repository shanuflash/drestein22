
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { createContext,useEffect,useState } from "react";
import { db } from "../../configsFiles/Firebase.config";

import { collection, getDocs, snapshotEqual } from "firebase/firestore";
import { toast } from "react-toastify";




export const UserContext = createContext()

export const UserProvider = (props)=>{
    const auth = getAuth()
    const [loggedIn , setLoggedIn]  = useState(auth.currentUser)

useEffect(()=>{
  
  onAuthStateChanged(auth,(user)=>{
      setLoggedIn(user);
    
})
// const colref = collection(db,'RegisteredPeople')

// getDocs(colref).then((snapshot)=>{
//     let books=[]
//     snapshot.docs.forEach((doc)=>{
//         books.push({...doc.data(),id:doc.id})
//     })
//     console.log(books)

// }).catch(e=>{
//     toast.error(e)
// })


},[auth,auth?.currentUser])






 
    return (
        <UserContext.Provider value={{
            loggedIn,
            setLoggedIn

  

        }}>
{props.children}
        </UserContext.Provider>
    )
}