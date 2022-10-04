import React from "react";
import styled from "styled-components";
import "../App.css";
import lap from "../assets/laptop.png";

const DeptImage = styled.img`
  border-radius: 20px;
`;

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
            <a href="#">Events</a>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default DepartMentCard;
