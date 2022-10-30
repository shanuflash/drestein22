import React from 'react'
import styled from 'styled-components'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useEffect } from 'react';
const Card = styled.div`
 background: #777777;
 display: flex;

 justify-content: center;
 align-items: center;
height: 100%;
margin-top: -50px;

@media screen and (max-width:600px) {
   margin-top: -100px;
}
`
const InnerCard  = styled.div`
background-color: #ffffff;
width: 50%;
height: 70%;
display: flex;
flex-direction: column;
border-radius: 10px;
@media screen and (max-width:600px) {
   width: 80%;
}



`
const HeadCard1 = styled.div`
    background-color: #6ae968;
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`
const HeadCard2 = styled.div`
   color: #494949;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50%;
   padding: 10px;
`

function ConfirmCard() {

   useEffect(()=>{
      document.body.style.overflow = 'hidden';
      return ()=> document.body.style.overflow = 'unset';
   }, []);
  return (
    <Card>
        <InnerCard>
            <HeadCard1>
               <CheckCircleOutlineIcon sx={{
                color:'white',
                fontSize:'10em'
               }}/>
               <h2>success</h2>
            </HeadCard1>
            <HeadCard2>
           <h2 style={{
            fontSize:'2.3em'
           }}> Congratulations, your account has been registered successfully ✅ </h2>
            </HeadCard2>
        </InnerCard>
    </Card>
  )
}

export default ConfirmCard