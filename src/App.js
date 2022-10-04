import "./App.css";
import earth from "./earth.png";
import styled from "styled-components";
import Departments from "./components/Departments";
import { useState } from "react";
import Nav from "./components/NavBar";
import Main from "./components/Main";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Particalobj } from "./Particalobj";

const DepartmentDiv = styled.div`
z-index: -10;
`;

function App() {
  const { scrollY } = useViewportScroll();
  const yValue = useTransform(scrollY, [0, 2000], [0, -500]);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div className="App">
      <Particles
        className="particles"
        style={{
          position: "absolute",
          zIndex: -10000,
        }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particalobj}
      />
      <Nav />
      <Main />
      <motion.div className="img" style={{ y: yValue }}></motion.div>
      <DepartmentDiv>
        <Departments />
      </DepartmentDiv>
    </div>
  );
}

export default App;
