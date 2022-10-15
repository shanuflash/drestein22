import React from "react";
import styled from "styled-components";
import { motion, variants } from "framer-motion";

function About() {
  const AboutHead = styled.div`
    height: auto;
    width: 100vw;
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    margin-top: 100px;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    border-radius: 20px 20px 0 0;
    overflow-y: hidden;    
  `;
  const AboutContainer = styled.div`
      padding:100px 200px;
      @media screen and (max-width:600px) {
          padding: 20px 30px;
      }
    `;
  const AboutTitle = styled.div`
font-size: 7vw;
    font-weight: bold;
  display: flex; 
  text-transform: capitalize;
   justify-content: center;
  align-items: center;
  color: white;
  font-family: poppins, sans-serif;
         
        
        `;
  const AboutDescript = styled.div`
             font-size: 1em;
              padding:20px 0px;
             `;
  const text = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  const headtext = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  const List = styled.li`
  padding: 10px;
`;

  return (
    <AboutHead
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        staggerChildren: 0.5,
      }}
    >
      <AboutContainer>
        <AboutTitle
          as={motion.div}
          initial="offscreen"
          whileInView="onscreen"
          variants={headtext}
        >
          {/* About Saveetha */}
          about saveetha
        </AboutTitle>
        <AboutDescript>
          <ul>
            <List as={motion.li} variants={text}>
              Saveetha Engineering College (SEC) was established in 2001, by the
              Founder Chairman Dr. N. M. Veeraiyan, a committed and dedicated
              Medical Professional.
            </List>
            <List as={motion.li} variants={text}>
              SEC has a total strength of 4349 students in 15 UG courses, 8 PG
              Courses including MBA, MS by Research and Doctoral programs (PhD)
              in five Departments.
            </List>
            <List as={motion.li} variants={text}>
              National Board of Accredition NBA has Accredited 5 UG courses.
            </List>
            <List as={motion.li} variants={text}>
              Ranked 96 by NIRF- National Institute Ranking Framework for the
              academic year 2017-18 among all IITs, Central, State and Private
              Institutions in India.{" "}
            </List>
            <List as={motion.li} variants={text}>
              Awarded 'A' GRADE with a high score of 3.19 on a scale of 4 by the
              National Assessment and Accreditation Council (NAAC) for 5 Years.
            </List>
            <List as={motion.li} variants={text}>
              SEC awarded AUTONOMOUS status by the UGC from the academic year
              2019-2020.
            </List>
            <List as={motion.li} variants={text}>
              SEC is recognized as a Scientific and Industrial Research
              Organization (SIRO) by the Department of Scientific and Industrial
              Research (DSIR), Government of India.
            </List>
            <List
              as={motion.li}
              variants={text}
              style={{ paddingBottom: "5rem" }}
            >
              Five Research Centres recognised by Anna University
            </List>
          </ul>
        </AboutDescript>
      </AboutContainer>
    </AboutHead>
  );
}

export default About;
