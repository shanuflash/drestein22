import React from "react";
import styled, { keyframes } from "styled-components";
import saveethalogo from "../assets/saveethaLogo.svg";
import dresteinLogo from "../assets/dresteinLogo.svg";

const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    width: 100%;

 @media screen and (max-width:600px) {
         flex-direction: column;
         gap: 20px;


 } 
`;
const SLogo = styled.img`
     width: 35%;
     height: auto;
     background-color: #DADADA;
     border-radius: 10px;

     @media screen and (max-width:600px) {
         width: 90%;


         
 }

`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

const DLogo = styled.img`
 width: 15%;
 animation: ${rotate} 4s infinite linear;
 transform-origin:center;
@media screen and (max-width: 600px){

}




`;
const LogoHead = styled.div`
      display: flex;
      align-items: center;
      width: 35%;

      justify-content: center;
      @media screen and (max-width: 600px){
      width: 100%;


}

`;

const EventLogo = styled.div`
     display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 50%;
  /* background-color: red; */

  @media screen and (max-width: 600px) {

  }

`;
const DresteinLetter = styled.p`
  font-size: 2.5vw;
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: rgb(255, 255, 255);
  align-self: center;
  text-align: center;

  height: auto;
  @media screen and (max-width: 600px){
    font-size: 7vw;

}
`;
const Year = styled.p`
  font-size: 1vw;
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  color: rgb(255, 255, 255);
  text-align: center;
  height: auto;
  letter-spacing: 0.8em;
  margin-left: 1.5em;
  @media screen and (max-width: 600px){
    font-size: 3vw;


}
`;

function Nav() {
  return (
    <div>
      <Navbar>
        <SLogo src={saveethalogo} />
        <LogoHead>
          <DLogo src={dresteinLogo} alt="DresteinLogo" />

          <EventLogo>
            <DresteinLetter color="red">DRESTEIN</DresteinLetter>
            <Year>2 0 2 2</Year>
          </EventLogo>
        </LogoHead>
      </Navbar>
      {/* <div>

    <Main/>
     </div> */}
    </div>
  );
}

export default Nav;
