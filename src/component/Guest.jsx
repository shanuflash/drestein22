import React from "react";
import styled from "styled-components";
import { motion, varients } from "framer-motion";

const GuestHead = styled.div`
padding-bottom: 100px;
position: relative;
background: url("https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/footer-bg.png");
background-size: cover;
/* background-color: #760093; */
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
margin-top:12rem;
font-size: 8vw;
    font-weight: bold;
  display: flex; 
  text-transform: capitalize;
   justify-content: center;
  align-items: center;
  color: white;
  font-family: poppins, sans-serif;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
const GuestName = styled.h1`
  
  `;
const GuestDesp = styled.p`
    
  `;
const GuestContainer = styled.div`

margin-top:3rem;
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
display: flex;
align-items: center;
justify-content: center;
color: black;
font-size: 5vw;
text-align: center;
background-color: white;
width:80%;
  font-family: poppins, sans-serif;
    font-weight: bold;

height: 300px;
border-radius: 30px;
position: absolute;
top: 0%;
left: 50%;
transform: translate(-50%, -50%);
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  @media (max-width: 600px) {
  height: 100px;

  }
/* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
`;

function Guest() {
  const Guests = [
    {
      name: "Elon Musk",
      desc: "Founder: PayPal SpaceX Zip2",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Mark Zuckerberg",
      desc: "Chief Executive Officer of Facebook",
      src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    {
      name: "Sundar Pichai",
      desc: "Chief Executive Officer of Google",
      src: "https://api.time.com/wp-content/uploads/2020/09/time-100-Sundar-Pichai.jpg",
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
      <Test>Registeration fee: ₹ 150</Test>
      <GuestTitle
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        variants={textlight}
      >
        Chief Guests
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
