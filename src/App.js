import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Particle } from "./Particle.config";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import Nav from "./components/NavBar";
import Main from "./components/Main";
import GAllery from "./components/GAllery";
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let text = document.querySelector("img");
      let value = window.scrollY;
      console.log(value);
      text.style.transform = "translateY(" + value * 2 + "px)";
      console.log(value);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        let value = window.scrollY;
        console.log(value);
        //  text.style.transform = "translateY("+value * 2 + "px)";
        console.log(value);
      });
    };
  }, []);

  return (
    <div className="App">
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
      <div className="img"></div>
      <DepartmentDiv>
        <Departments />
      </DepartmentDiv>
      <GAllery />
    </div>
  );
}

export default App;
