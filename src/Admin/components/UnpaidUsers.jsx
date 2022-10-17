import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, Query,where } from 'firebase/firestore'
import { db } from '../../configsFiles/Firebase.config'
import { Card } from '@mui/material'
import{Switch} from '@mui/material'
import {Typography} from '@mui/material'
import styled from 'styled-components'
import UserInfoCard from './UserInfoCard'
import { uuidv4 } from '@firebase/util'
const UnPaidUSerMain = styled.div`
width: 100vw;
padding: 0  1.5rem;
  margin: 0 auto;
  display: grid;
  margin-top: 50px;
  place-items: center;
  min-height: 100px;
  /* row-gap: 1rem; */
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }


`
const TextusernotPaid = styled.div`
    display: flex;
    color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50px,-50px);

    font-size: 10vw;
`
function UnPaidUsers() {
    const [paidUsers,setPaidusers] = useState([])
    const [load,setload] = useState(false)
    useEffect(()=>{
        setload(true)
        const colref = collection(db,'RegisteredPeople')
        const q= query(colref,where("cashPaid",'==',false))

    onSnapshot(q,(snapshot)=>{
    let books=[]
    console.log(snapshot.docs)
    snapshot.docs.forEach((doc)=>{
        books.push({...doc.data(),id:doc.id})
    })
    // console.log(books)
    console.log(books)
    setPaidusers(books)
    setload(false)

})
    },[])
    if(load){
        return <h1 style={{
            color:'black'
        }}>loading...</h1>
    }

   
  return (
      <UnPaidUSerMain>
        {
            paidUsers.length===0 && <TextusernotPaid>no user</TextusernotPaid>
        }

{
            paidUsers.map(data=>{
                return <UserInfoCard key={uuidv4()} data={data} />
                
                
            })
        }
      </UnPaidUSerMain>
  )
}

export default UnPaidUsers