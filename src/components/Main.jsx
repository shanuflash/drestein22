import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import "../App.css";
import { useState } from "react";
const MainHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  color: white;
  margin-top: 2.5rem;

  
  @media screen and (max-width: 600px) {
    /* background:rgba(0, 0, 0, 0.3); */
    /* z-index: -100; */
    margin-top: -10px;
  }
`;
const HeaderBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 10px;
  margin: 3em;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    border: none;
    text-align: left;
  }
`;
const HeaderMainText = styled.div`
  border-right: 1px solid white;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 600px) {
    border: none;
    width: 100%;

    text-align: left;
  }
`;
const DresteinText = styled.p`
  line-height: 1em;
  font-size: 5vw;
  text-align: center;
  width: 80%;
  min-height: 10%;

  @media screen and (max-width: 600px) {
    font-size: 10vw;
    margin: 10px;
    min-width: 100%;
  }
`;

const Span = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  @media screen and (max-width: 600px) {
    ${(props) =>
      props.timer &&
      css`
        font-size: 10vw;
        font-weight: bold;
      `}
  }
  ${(props) =>
    props.let_1 &&
    css`
      color: #279fda;
    `}

  ${(props) =>
    props.let_2 &&
    css`
      color: #5bba47;
    `}
  ${(props) =>
    props.let_3 &&
    css`
      color: #ff565d;
    `}
  ${(props) =>
    props.let_4 &&
    css`
      color: #ca3e96;
    `}

  ${(props) =>
    props.timer &&
    css`
      font-size: 3vw;
      font-weight: lighter;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: 200;
    `}
`;

const NationText = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 1.5vw;
  width: 80%;
  @media screen and (max-width: 600px) {
    font-size: 5vw;
    background-color: white;
    border-radius: 10px;
    color: black;
    font-family: poppins;
    width: 80%;
    padding: 5px;
  }
`;
const Timer = styled.div`
  font-size: 5.5rem;
  text-align: center;
  width: 40%;
  @media screen and (max-width: 600px) {
    font-size: 15vw;
    width: 100%;
  }
`;
const HeaderBtn = styled.div`
    @media screen and (min-width:600px) {
        margin-top: 100px;
    }
`;
const HoverSpan = styled.span``;

const RegisterNow = styled.button`
  color: black;
  font-size: 4vw;

  border: none;
  
  text-transform: uppercase;
  border-radius: 1rem;
  padding: 1rem;
  transition: all 0.5s;
  font-family: "Poppins", sans-serif;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;
  transition: all 0.5s;
  margin: 5px;

  @media screen and (max-width: 600px) {
    font-size: 7vw;
    width: 100%;
  }
  /* @media screen  and (max-width: 400px){

     bottom: 3em;
} */
`;
// jbljbbkl

function Main() {
  const [date, setdate] = useState({
    days: "12",
    hr: "35",
    min: "45",
    sec: "",
  });

  const today = new Date();
  const eventDay = new Date("November 10, 2022");
  const msPerDay = 24 * 60 * 60 * 1000;
  const timeLeft = eventDay.getTime() - today.getTime();
  const e_daysLeft = timeLeft / msPerDay;
  const daysLeft = Math.floor(e_daysLeft);

  const e_hrsLeft = (e_daysLeft - daysLeft) * 24;
  const hrsLeft = Math.floor(e_hrsLeft);

  const e_minLeft = (e_hrsLeft - hrsLeft) * 60;
  const minsLeft = Math.floor(e_minLeft);

  const secLeft = Math.floor((e_minLeft - minsLeft) * 60);

  setInterval(() => {
    const today = new Date();
    const eventDay = new Date("November 10, 2022");
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeLeft = eventDay.getTime() - today.getTime();
    const e_daysLeft = timeLeft / msPerDay;
    const daysLeft = Math.floor(e_daysLeft);

    const e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    const hrsLeft = Math.floor(e_hrsLeft);

    const e_minLeft = (e_hrsLeft - hrsLeft) * 60;
    const minsLeft = Math.floor(e_minLeft);

    const secLeft = Math.floor((e_minLeft - minsLeft) * 60);
    setdate({
      days: daysLeft,
      hr: hrsLeft,
      min: minsLeft,
      sec: secLeft,
    });
  }, 1000);

  return (
    <MainHeader className="main_header">
      <HeaderBg className="header_bg  ">
        <HeaderMainText className="header_main_text ">
          <DresteinText className="drestein">
            <Span let_1 className="shine">
              DR
            </Span>
            eam d
            <Span let_2 className="chrome">
              ES
            </Span>
            ign
            <br />
            compete<Span let_3>TE</Span> w<Span let_4>IN</Span>
          </DresteinText>
          <NationText className="nation ">
            13<sup>th</sup> NATIONAL LEVEL INTER COLLEGIATE TECHNICAL AND
            MANAGEMENT FEST
          </NationText>
        </HeaderMainText>
        <Timer className="timer">
          <Span bold>{date.days}</Span>
          <Span timer>days</Span> <Span bold>{date.hr}</Span>
          <Span timer>hrs</Span>
          <br /> <Span bold>{date.min}</Span>
          <Span timer>mins</Span>
          <Span bold>{date.sec}</Span>
          <Span timer>sec</Span>
        </Timer>
      </HeaderBg>
      <HeaderBtn className="header_btn">
        <RegisterNow className="button">
          <HoverSpan className="span_btn">register now</HoverSpan>
        </RegisterNow>
      </HeaderBtn>
    </MainHeader>
  );
}

export default Main;
