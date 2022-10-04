import React from "react";
import styled from "styled-components";
import "../App.css";
import lap from "../assets/laptop.png";

function DepartmentCard({ img, title, des, color }) {
  const a = title.split(" ");
  return (
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img
            style={{
              borderRadius: "20px",
              objectFit: "cover",
            }}
            src={img}
          />
        </div>
        <div class="contentBx">
          <h2>
            {a[0]}
            <br />
            {a[1]}
          </h2>
          <a href="#">Events</a>
        </div>
      </div>
    </div>
  );
}

export default DepartmentCard;
