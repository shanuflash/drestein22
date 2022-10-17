import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../configsFiles/Firebase.config';
import { onSnapshot } from 'firebase/firestore';
import {doc} from 'firebase/firestore'
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { uuidv4 } from '@firebase/util';
import { css } from '@mui/material';

const SingleUserMain = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;


`;
const UserCard = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    border-radius: 10px;
    background-color: #ff4949;
    ${({paid}) => paid && `
    background: #1af51a;
  `}
`;

function SingleUserPage() {
    const params= useParams()
    const userid = params.userid
   const [Registeredpeople,setRegistredPeople] = useState([]);
   const [load,setLoad] = useState(false)
//    http://localhost:3000/user/qlkwnfdklwqfn
useEffect(()=>{
    console.log(Registeredpeople)
    try{
        setLoad(true)
        const docRef = doc(db,'RegisteredPeople',`${userid}`)
      onSnapshot(docRef,(snapshot=>{
          let books=[]
           // books.push(snapshot.data())
         
          books.push(snapshot.data())
          if(books[0]!=undefined){

              setRegistredPeople(books) 

        }
        setLoad(false)

      }))
       
       }catch(e){
        toast.error('your not exist')
        console.log(e)
       }
},[])

if(load){
    return <h1>Loading...</h1>
}



  return (
    <SingleUserMain>
        {Registeredpeople.length ===0 ? <h1>user Not Found</h1> :
        <div>
               {
            Registeredpeople.map(data=>{
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
                return <UserCard paid={data.cashPaid} key={uuidv4()}>
                    <p>name : {fname+" "+lname}</p>
                    <p>college : {college}</p>
                    <p>department : {dept}</p>
                    <p>gender : {gender}</p>
                    <p>year : {year}</p>
                    <p>regno : {regno}</p>
                    <p><strong>{cashPaid ? 'paid':'unpaid'}</strong></p>

                </UserCard>
            })
        }
            </div>
        }


     
    </SingleUserMain>
  )
}

export default SingleUserPage