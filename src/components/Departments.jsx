import React from "react";
import styled from "styled-components";
import DepartMentCard from "./DepartmentCard";

const DeptHeader = styled.h1`
    font-size: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;


`;
const DepartmentContainer = styled.div`
  /* display: flex;
gap: 30px;
width: 100vw;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap; */

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
const departobj = [
  {
    title: `Information Technology`,
    img: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#a9e3e8",
  },
  {
    title: "Mechanical Engineering",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#2d3d3e",
  },
  {
    title: "Civil Engineering ",
    img: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNpdmlsJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#e8aea9",
  },
  {
    title: "Electrical\t& Electronics\tEngineering  ",
    img: "https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGVsZWN0cmljYWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#bba9e8",
  },
  {
    title: "Artificial\tIntelligence\t& Machine\tLearning",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#e8a9e3",
  },
  {
    title: "Chemical Engineering",
    img: "https://images.unsplash.com/photo-1616458964840-5108e4d3adb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZW1pY2FsJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#e3e8a9",
  },
  {
    title: "Agricultural Engineering",
    img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    des: "qkndklwnfkl",
    color: "#86ebc9",
  },
  {
    title: "Computer\tScience &\tEngineering",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    des: "qkndklwnfkl",
    color: "#86ebc9",
  },
];
function Departments() {
  return (
    <>
      <DeptHeader>departments</DeptHeader>
      <DepartmentContainer>
        {departobj.map((data) => {
          return <DepartMentCard {...data} />;
        })}
      </DepartmentContainer>
    </>
  );
}

export default Departments;
