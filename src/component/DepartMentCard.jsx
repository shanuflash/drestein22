import React from "react";
import styled from "styled-components";
import "../styles/DepartMentCard.css";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const DeptImage = styled.img`
  border-radius: 20px;
`;

function DepartMentCard({ img, title, des, color, bgtext, mbtm }) {
  const a = title.split(" ");
  const Card = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background: #f0f0f0;
    border-radius: 20px;
    overflow: hidden;
    z-index: 100;
    &::before{
      content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${color};
    clip-path: circle(150px at 80% 20%);
    transition: 0.7s ease all;
    }
    &:hover {
      &::before{
        clip-path: circle(300px at 80% -20%);
      }
    }
    &::after{
    content: "${bgtext}";
    opacity: 0.3;
    position: absolute;
    top: 50%;
    left: -20%;
    font-size: 10em;
    font-weight: 800;
    font-style: italic;
    color: ${color};
    }
  
`;

  const RegisterNow = styled.h3`
      color: #000;
    font-weight: 300;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 2px;
    margin-right: 10px;
    margin-top: 10px;
    font-weight: 500;
    border: 1px solid #1985ff;
    color: #1985ff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 20px 0px 20px 0px;
    padding: 10px;

`;
  const Event = styled.a`
  
  display: inline-block;
    padding: 10px 20px;
    background: ${color};
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    color: white;
    opacity: 1;
    transform: translateY(50px);
    transition: 0.5s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
  const text = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const cardimg = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
      y: 10,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const device = window.innerWidth;

  const cardforMobile = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const cardforDesktop = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        // type:'spring',
        // bounce:0.4,
        duration: 1,
      },
    },
  };
  const DeptTxt = styled.h2`
  font-size: 1.5em;
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #000;  
  margin-top: ${mbtm};
`;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={device < 700 ? cardforMobile : cardforDesktop}
      className="containerdept"
    >
      <Card
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          staggerChildren: 0.5,
        }}
        className="card"
      >
        <div
          class="imgBx"
          style={{
            width: "100%",
            maxHeight: "150px",
            margin: "20px 0",
          }}
          variants={text}
        >
          <motion.div variants={cardimg}>
            <img
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
              src={img}
            />
          </motion.div>
        </div>
        <div className="contentBx">
          <DeptTxt as={motion.div} variants={text}>
            {a[0]}
            <br />
            {a[1]}
          </DeptTxt>
          <div>
            <Link to="/events">
              <Event href="#">Events</Event>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default DepartMentCard;
