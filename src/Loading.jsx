import React, { useEffect } from "react";
import DresteinLogo from "../src/assets/dresteinLogo.svg";
import styled, { keyframes } from "styled-components";
const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const DLogo = styled.img`
  width: 5%;

  margin-right: 10px;
  animation: ${rotate} 3s infinite linear;
  transform-origin: center;
  @media screen and (max-width: 600px) {
    width: 16%;
  }
`;
const Loadingconainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: rgba(72, 80, 93, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  z-index: 10000;
`;
function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <Loadingconainer>
      <DLogo src={DresteinLogo} />
    </Loadingconainer>
  );
}

export default Loading;
