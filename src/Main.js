import React, { useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useScroll, useTransform } from "framer-motion";
import { Particle } from "./configs/partical.config";
import styled from "styled-components";
import Departments from "./components/Departments/Departments";
import Gallery from "./components/Gallery/Gallery";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Guest from "./components/Guest/Guest";
import Footer from "./components/Footer/Footer";
import "./App.css";

const DepartmentDiv = styled.div`
position: sticky;
`;

const Main = () => {
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
    <div ref={scroll} id="#">
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
      <Header />
      <motion.div
        className="img"
        style={{ y: DeviceSize < 800 ? MValue : DValue, zIndex: -1 }}
      ></motion.div>
      <DepartmentDiv id="Departments">
        <Departments />
      </DepartmentDiv>
      <div id="Gallery">
        <Gallery />
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

export default Main;
