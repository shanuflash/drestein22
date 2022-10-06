import "./App.css";
import styled from "styled-components";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Particle } from "./Particle.config";
import { useScroll } from "framer-motion";

import Nav from "./components/NavBar";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Departments from "./components/Departments";

const DepartmentDiv = styled.div`position: sticky;`;

function App() {
  const { scrollY } = useViewportScroll();
  const yValue = useTransform(scrollY, [0, 1000], [0, -300]);
  const { scrollYProgress } = useScroll();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="App">
      <motion.div
        className="scrollprogress"
        style={{ scaleX: scrollYProgress }}
      />
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particle}
      />
      <Nav />
      <Main />
      <motion.div
        className="img"
        style={{ y: yValue, zIndex: -1 }}
      ></motion.div>
      <DepartmentDiv>
        <Departments />
      </DepartmentDiv>
      <Gallery />
    </div>
  );
}

export default App;
