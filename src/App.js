import React, { useRef } from "react";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ImageGallery from "./component/Gallery";
import Nav from "../src/component/Nav";
import Main from "../src/component/Main";
import { useCallback } from "react";
import { Particle } from "./configsFiles/partical.config";
import "./styles/astroid.css";
import styled from "styled-components";
import Departments from "./component/Departments";
import About from "./component/About";
import { motion, useScroll, useTransform } from "framer-motion";
import Guest from "./component/Guest";
import Footer from "./component/Footer";
import Slider from "./component/slider";

const DepartmentDiv = styled.div`
position: sticky;
`;

const App = () => {
  const scroll = useRef(null);
  const { scrollY } = useScroll();
  const MValue = useTransform(scrollY, [0, 1000], [0, -200]);
  const DValue = useTransform(scrollY, [0, 1000], [0, -500]);
  const { scrollYProgress } = useScroll();
  const DeviceSize = window.innerWidth;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div ref={scroll}>
      <motion.div
        className="scrollprogress"
        style={{ scaleX: scrollYProgress }}
      />
      {/* <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particle}
      /> */}
      <Nav />
      <Main />
      <motion.div
        className="img"
        style={{ y: DeviceSize < 800 ? MValue : DValue, zIndex: -1 }}
      ></motion.div>
      <DepartmentDiv id="Departments">
        <Departments />
      </DepartmentDiv>
      <div id="Gallery">
        <ImageGallery />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Guest">
        <Guest />
      </div>
      <div id="Footer">
        <Footer />
      </div>

      {/* <Slider /> */}
    </div>
  );
};

export default App;
