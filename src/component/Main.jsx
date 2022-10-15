import React from "react";
import styled, { css } from "styled-components";
import "../App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FlipCountdown from "@rumess/react-flip-countdown";
import { Link } from "react-router-dom";

const MainHeader = styled.div`
  margin-top:5rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  color: white;

  @media screen and (max-width: 600px) {
    margin-top:2rem;
  }
`;
const HeaderBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10px;
  margin-top: 1rem;
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
  line-height: 1.2em;
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
  /* ..sss */
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
  font-size: 3vw;
  text-align: center;
  width: 45%;
  font-weight:200;
  @media screen and (max-width: 600px) {
    font-size: 7vw;
    width: 100%;
  }
`;
const HoverSpan = styled.span``;

const RegisterNow = styled.button`
  color: black;
  font-size: 4vw;
  background-color: white;
  border: none;
  text-transform: uppercase;
  border-radius: 1rem;
  padding: 1rem;
  transition: all 0.5s;
  font-family: "Poppins", sans-serif;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
  rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;
  transition: all 0.5s;
  margin-top: 2em;

  @media screen and (max-width: 600px) {
    font-size: 7vw;
    width: 100%;
  }
`;

function Main() {
  const DeviceSize = window.innerWidth;
  return (
    <MainHeader id="Main" className="main_header">
      <HeaderBg
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          staggerChildren: 0.5,
        }}
        className="header_bg"
      >
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
            compe<Span let_3>TE</Span> w<Span let_4>IN</Span>
          </DresteinText>

          <NationText className="nation ">
            13<sup>th</sup> NATIONAL LEVEL INTER COLLEGIATE TECHNICAL AND
            MANAGEMENT FEST
          </NationText>
        </HeaderMainText>
        <Timer className="timer">
          <FlipCountdown
            dayTitle="Days"
            hourTitle="Hours"
            minuteTitle="Minutes"
            secondTitle="Seconds"
            className="countdown"
            hideYear
            hideMonth
            size={DeviceSize < 550 ? "small" : "medium"}
            theme="dark"
            endAtZero
            endAt={"2022-11-09 01:26:58"}
          />
          November 9th & 10th
        </Timer>
      </HeaderBg>
      <Link to="/form">
        <RegisterNow className="button">
          <HoverSpan className="span_btn">register now</HoverSpan>
        </RegisterNow>
      </Link>
    </MainHeader>
  );
}

export default Main;
