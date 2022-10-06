import React from "react";
import styled from "styled-components";
import "../App.css";

function DepartMentCard({ img, title, des, color }) {
  const a = title.split(" ");
  console.log(a);
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
    content: "saveetha";
    position: absolute;
    top: 55%;
    left: 20%;
    font-size: 3em;
    font-weight: 800;
    font-style: italic;
    color: rgba(25, 133, 255, 0.15);
    }
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
  return (
    <div className="container">
      <Card className="card">
        <div
          class="imgBx"
          style={{
            width: "100%",

            maxHeight: "150px",
            margin: "20px 0",
          }}
        >
          <img
            style={{
              borderRadius: "20px",
              objectFit: "cover",
            }}
            src={img}
            alt="dept-img"
          />
        </div>
        <div className="contentBx">
          <h2>
            {a[0]}
            <br />
            {a[1]}
          </h2>
          <div className="lorem">
            <h3>register now</h3>
          </div>
          <div>
            <Event href="#">Events</Event>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default DepartMentCard;
