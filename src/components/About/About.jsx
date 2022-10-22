import React from "react";
import styled from "styled-components";
import { motion, variants } from "framer-motion";

function About() {
  const AboutHead = styled.div`
    height: auto;
    width: 100vw;
    /* linear-gradient(90.21deg,#0b001d -5.91%,#00126a 111.58%) */
    /* background: linear-gradient(90deg, #0b001d -5.91%, #00126a 111.58%); */
    /* background: linear-gradient(90deg, #0b001d -5.91%, #000833 111.58%); */
    /* background-image: linear-gradient(45deg, #f98bff8e 0%, #2bd1ff82 52%, #2bff8789 90%); */


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
    /* font-family: poppins, sans-serif; */
    font-family: 'Montserrat', sans-serif;
  `;
  const AboutDescript = styled.div`
    font-size: 1.5em;
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

  const Descard = styled.div`
  font-size:1.3em;
  background-color:rgba(225,225,225,0.7);
  color: black;
  border-radius:1rem;
  padding:1rem;
  margin:1rem;
  `;

  const Descardhead = styled.span`
  font-weight:bold;
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
          <Descard as={motion.div} variants={text}>
            <Descardhead>Our Vision:</Descardhead> To be and to be recognized
            for setting the standard of excellence in engineering education and
            high quality research in Science and Technology.
          </Descard>
          <Descard as={motion.div} variants={text}>
            <Descardhead>Our Mission:</Descardhead> To promote academic
            excellence; widen intellectual horizon; self-discipline and high
            ideals for the total personality development of the individual.
          </Descard>
          {/* <List as={motion.li} variants={text}>
              Saveetha Engineering College (SEC) was established in 2001, by the
              Founder Chairman Dr. N. M. Veeraiyan, a committed and dedicated
              Medical Professional.
            </List> */}
          <ul>
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
