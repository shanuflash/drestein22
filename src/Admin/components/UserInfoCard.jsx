import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Switch } from '@mui/material'
import { useState } from 'react'
import { doc } from 'firebase/firestore'
import { db } from '../../configsFiles/Firebase.config'
import { updateDoc } from 'firebase/firestore'
import {Alert} from '@mui/material'
import { toast } from 'react-toastify'
const UserCard = styled.div`


  width: 100%;
  color: #000000;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 padding: 1rem;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
border-radius: 1rem;
background: ${props => props.paid ? "#85f49d;" : "#fb7878"};

`

function UserInfoCard({data,Scanpage}) {

  const [load,setload] = useState(false)


 const {lname,
    fname,
    college,
    cashPaid,
    dept,
    gender,
    year,
    regno,
    id
   }=data

   const handleChange = async(e,id) => {
    setload(true)
    // setChecked(pre=>!pre)
     const docRef = doc(db,'RegisteredPeople',`${id}`)
      console.log(e.target.checked)

     await updateDoc(docRef,{
      cashPaid:e.target.checked
     }).then(()=>{

  setload(false)
  toast.success('profile updated')

    // console.log("this is loaf",load.current)
      
     })
    // console.log(e.target.checked)
     
  };
  return (
    <UserCard paid={cashPaid}>
<p>Name : {fname+" "+lname}</p>
<p>Rgister No : {regno}</p>
<p>Department : {dept}</p>
<p>Year : {year}</p>
<p>college : {college}</p>
<p>gender : {gender}</p>
<p><strong>Paid Status : {cashPaid ? 'paid' : 'unpaid'}</strong></p>
{Scanpage && 
<div>


    <Switch
    defaultChecked={cashPaid}

    onChange={(e)=>handleChange(e,id)}
      inputProps={{ 'aria-label': 'controlled' }}
   
      /> 
 {load && 
<Alert severity="error">updating the user don't refresh the page</Alert>}
      </div>
}

    </UserCard>
  )
}

export default UserInfoCard