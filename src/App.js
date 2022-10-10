import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

import "./App.css";
// import '../src/styles/Gallery.scss'
// import Gallery from './component/Gallery';
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

const DepartmentDiv = styled.div`
position: sticky;
`;

const App = () => {
  const parallex = useRef(null);
  const scroll = useRef(null);
  const [background, setBackground] = useState("#262626");
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  const MValue = useTransform(scrollY, [0, 1000], [0, -200]);
  const DValue = useTransform(scrollY, [0, 1000], [0, -500]);
  const { scrollYProgress } = useScroll();
  const DeviceSize = window.innerWidth;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  const parallexFun = () => {
    window.requestAnimationFrame(() => {
      var pos = window.pageYOffset * parallex.current.dataset.rate;
      if (parallex.current.dataset.direction === "vertical") {
        parallex.current.style.transform =
          "translate3d(0px ," + pos + "px" + ",0px)";
      } else {
        var posX = window.pageYOffset * parallex.current.dataset.ratex;
        var posY = window.pageYOffset * parallex.current.dataset.ratey;
        parallex.current.style.transform =
          "translate3d(" + posX + "px," + posY + "px,0px)";
      }
    });
  };

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
      <div>
        <ImageGallery />
      </div>

      <div>
        <About />
      </div>
      <div>
        <Guest />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
