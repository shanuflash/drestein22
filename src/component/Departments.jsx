import React from "react";
import styled from "styled-components";
import DepartMentCard from "./DepartMentCard";
import { departobj } from "../configsFiles/Departments.config";
import { useState, useMemo } from "react";

import "../styles/Departments.css";

import { motion, useScroll, useTransform } from "framer-motion";

const DepartmentButtonContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

const DepartmentContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: grid;
  margin-top: 50px;
  place-items: center;
  min-height: 100px;

  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const text = {
  offscreen: { x: -200, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

function Departments() {
  const [depts] = useState(departobj);
  // console.log(depts.length);
  const [Count, setCount] = useState(8);
  const showMore = () => {
    if (Count < depts.length) {
      setCount(Count + 5);
    } else {
      setCount(Count - 5);
    }
  };
  const ToShow = useMemo(() => {
    return depts
      .slice(0, Count)
      .map((data, index) => (
        <DepartMentCard key={depts.title + index} {...data} />
      ));
  }, [depts, Count]);
  return (
    <>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 1 }}
        className="DeptHead"
      >
        Departments
      </motion.h1>
      <DepartmentContainer>
        {ToShow.length ? ToShow : "Loading..."}
        {/* {departobj.map((data) => {
          return <DepartMentCard key={data.title} {...data} />;
        })} */}
      </DepartmentContainer>

      <DepartmentButtonContainer>
        <button className="showmore" onClick={showMore}>
          show more
        </button>
      </DepartmentButtonContainer>
    </>
  );
}

export default Departments;
