import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import saveethalogo from "../assets/logo.png";
import dresteinLogo from "../assets/dresteinLogo.svg";
import Mobilenav from "./Mobilenav";
import "../styles/HambBurger.css";
const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0 0 1rem;
    
  /* height:200px; */
    width: 100%;
      /* overflow: auto; */

 @media screen and (max-width:600px) {
         flex-direction: column;
         gap: 20px;
         padding-left: 0;


 } 
`;
const SLogo = styled.img`
     width: 35%;
     height: auto;
     /* background-color: #DADADA; */
     /* border-radius: 10px; */

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
  width: 20%;
  margin-right: 10px;
 animation: ${rotate} 4s infinite linear;
 transform-origin:center;
@media screen and (max-width: 600px){
  width: 16%;
}




`;
const LogoHead = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
    
     
      /* background-color: green; */
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
  min-width: 100px;
  /* background-color: blue; */

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

const NavHead = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;


  @media screen and (max-width: 600px) {
  display: none;
  
}
`;
const NavItem = styled.li`
    text-transform: uppercase;
font-size:1rem;
cursor: pointer;
text-decoration: none;

`;
const MobileNavHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    align-self: flex-start;




`;
const Navcontainer = styled.div`
  /* width:100%;
  position: relative; */
`;

function Nav() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 30) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    // <nav style={{ position: "sticky", top: "0" }}>
    <Navbar
      className={colorChange ? "navbar colorChange" : "navbar"}
      style={{ position: "sticky", top: "0" }}
    >
      <SLogo src={saveethalogo} />
      <NavHead>
        <NavItem>Home</NavItem>
        <NavItem>Departments</NavItem>
        <NavItem>Gallery</NavItem>
        <NavItem>About</NavItem>
      </NavHead>

      <MobileNavHeader>
        <Mobilenav />

        <LogoHead>
          <DLogo src={dresteinLogo} alt="DresteinLogo" />

          <EventLogo>
            <DresteinLetter color="red">DRESTEIN</DresteinLetter>
            <Year>2 0 2 2</Year>
          </EventLogo>
        </LogoHead>
      </MobileNavHeader>
      {/* </Navcontainer> */}
    </Navbar>
    // </nav>
  );
}

export default Nav;
