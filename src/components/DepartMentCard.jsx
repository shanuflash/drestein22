import React from "react";
import "../components/DepartMentCard.css";
import lap from "../pc.png";
function DepartMentCard() {
  return (
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img src={lap} />
        </div>
        <div class="contentBx">
          <h2>
            Information <br />
            Technology
          </h2>
          <div class="lorem">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
          <a href="#">Events</a>
        </div>
      </div>
    </div>
  );
}

export default DepartMentCard;
