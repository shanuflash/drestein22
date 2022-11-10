import React from "react";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect } from "react";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -50px;
  @media screen and (max-width: 600px) {
    margin-top: -100px;
  }
`;

const InnerCard = styled.div`
  background-color: #000000;
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const HeadCard1 = styled.div`
  color: #ebebeb;

  background-color: #00331f;
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    height: 30%;
  }
`;

const HeadCard2 = styled.div`
  color: #acacac;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* color: #000000; */
  height: 60%;
  font-size: 1.5vw;
  @media screen and (max-width: 600px) {
    font-size: 4vw;
    height: 70%;
  }
  @media screen and (max-width: 800px) {
    font-size: 3vw;
  }
  /* padding: 10px; */
`;

function ConfirmCard() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <Card>
      <InnerCard>
        <HeadCard1>
          <CheckCircleOutlineIcon
            style={{ color: "#ebebeb", fontSize: "7em" }}
          />
          <h2>success</h2>
        </HeadCard1>
        <HeadCard2>
          <h2
            style={{
              fontSize: "2em",
            }}
          >
            Congratulations!
          </h2>
          <h2
            style={{
              fontSize: "2em",
            }}
          >
            You have successfully registered!
          </h2>
          <h3 style={{ textAlign: "justify", padding: "0 2rem 0 2rem" }}>
            Please check your e-mail for details about the event. If you can't
            find it, check the spam folder. Don't forget to pay for the
            registered events while coming! Further details will be sent via
            mail!
          </h3>
        </HeadCard2>
      </InnerCard>
    </Card>
  );
}

export default ConfirmCard;
