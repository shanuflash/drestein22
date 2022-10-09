import React from "react";
import styled from "styled-components";
import DepartMentCard from "./DepartMentCard";
// import { departobj } from "../configsFiles/Departments.config";
import { useState, useMemo } from "react";

import "../styles/Departments.css";

import { motion, useScroll, useTransform } from "framer-motion";

const DepartmentButtonContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
   width:100%;
   height:auto;
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

const departobj = [
  {
    title: `Information Technology`,
    img: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#37c0ff",
    bgtext: "Tech",
  },
  {
    title: "Mechanical Engineering",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#67ff45",
    bgtext: "Mech",
  },
  {
    title: "Civil Engineering ",
    img: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNpdmlsJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#ff3b41",
    bgtext: "Civil",
  },
  {
    title: "Electrical\t& Electronics\tEngineering  ",
    img: "https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGVsZWN0cmljYWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#ff6d41",
    bgtext: "Elec",
  },
  {
    title: "Artificial\tIntelligence\t& Machine\tLearning",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#ff58c2",
    bgtext: "Artif",
  },
  {
    title: "Chemical Engineering",
    img: "https://images.unsplash.com/photo-1616458964840-5108e4d3adb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZW1pY2FsJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#ff6d41",
    bgtext: "Chem",
  },
  {
    title: "Agricultural Engineering",
    img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#37c0ff",
    bgtext: "Agri",
  },
  {
    title: "Computer\tScience &\tEngineering",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    des: "qkndklwnfkl",
    color: "#67ff45",
    bgtext: "Compu",
  },

  {
    title: "Electronics\t& Communication\tEngineering",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    des: "qkndklwnfkl",
    color: "#37c0ff",
    bgtext: "ommu",
  },
  {
    title: "Electronics\t& Instrumentation\tEngineering",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    des: "qkndklwnfkl",
    color: "#ff3b41",
    bgtext: "Instr",
  },
  {
    title: "Bio\tMedical Engineering",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    des: "qkndklwnfkl",
    color: "#ff58c2",
    bgtext: "BioMed",
  },
  {
    title: "Medical Electronics",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    des: "qkndklwnfkl",
    color: "#ff6d41",
    bgtext: "Medi",
  },
  {
    title: "Master\tof\tBusiness Administration",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    des: "qkndklwnfkl",
    color: "#67ff45",
    bgtext: "Busin",
  },
];
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
