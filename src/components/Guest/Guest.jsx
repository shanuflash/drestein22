import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GuestHead = styled.div`
  padding-bottom: 100px;
  position: relative;
  /* background: linear-gradient(90deg, #00126a -80.91%, #0b001d 111.58%); */
  background: linear-gradient(
    141deg,
    rgb(0 40 86 / 75%) 51.2%,
    rgb(0 125 66 / 75%) 98.6%
  );
  border-radius: 0 0 20px 20px;
  width: 100%;
  height: 100%;
  /* overflow-x: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const GuestTitle = styled.div`
  margin-top: 12rem;
  font-size: 8vw;
  font-weight: bold;
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Montserrat", sans-serif;

  /* font-family: poppins, sans-serif; */
  @media (max-width: 600px) {
    margin-top: 7rem;
    font-size: 10vw;
  }
`;
const GuestImageDiv = styled.div`
  width: 100vw;

  text-align: center;
`;
const GuestImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
const GuestName = styled.h1``;
const GuestDesp = styled.p``;
const GuestContainer = styled.div`
  margin-top: 3rem;
  width: 100vw;

  display: flex;

  gap: 2rem;

  flex-direction: column;

  @media (min-width: 980px) {
    /* grid-template-columns: repeat(2, 1fr);
     */
    flex-direction: row;
  }
`;

const Test = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 5vw;
  text-align: center;
  /* background-color: white; */
  width: 80%;
  font-family: "Montserrat", sans-serif;

  /* font-family: poppins, sans-serif; */
  font-weight: bold;

  height: 300px;
  border-radius: 30px;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px 20px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px 20px inset; */
  @media (max-width: 600px) {
    height: 100px;
  }
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
`;

const Test2 = styled.div`
  font-size: 2.9vw;
`;

function Guest() {
  const Guests = [
    {
      name: "Ganesh Thirunavukkarasu M ",
      desc: "",
      src: "/guest.jpg",
    },
  ];

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
  const textlight = {
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
  return (
    <GuestHead>
      <Test>
        Prizes worth upto 5 Lakhs
        <Test2>Participate in any event with a single payment*</Test2>
      </Test>
      <GuestTitle
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        variants={textlight}
      >
        <div className="GalleryHeadTxt">Chief Guest</div>
      </GuestTitle>

      <GuestContainer>
        {Guests.map((data) => {
          return (
            <GuestImageDiv
              as={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                staggerChildren: 0.5,
              }}
            >
              <GuestImg as={motion.img} variants={text} src={data.src} />
              <GuestName
                as={motion.h1}
                initial="offscreen"
                whileInView="onscreen"
                varients={text}
              >
                {data.name}
              </GuestName>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                <img src="tcs.jpg" style={{ borderRadius: "1rem" }} />

                <div style={{ textAlign: "left" }}>
                  Regional Head - Academic Interface Programme
                  <br /> at Tata Consultancy Services | Career Coach
                  <br /> Chennai, Tamil Nadu, India
                </div>
              </div>
              <GuestDesp
                as={motion.p}
                initial="offscreen"
                whileInView="onscreen"
                varients={text}
              >
                {data.desc}
              </GuestDesp>
            </GuestImageDiv>
          );
        })}
      </GuestContainer>
    </GuestHead>
  );
}

export default Guest;
