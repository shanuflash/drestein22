import "./App.css";
import earth from "./earth-1.png";
import seclogo from "./sec_logo.png";
import Header from "./components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeaderText from "./components/HeaderText";
import { useState } from "react";
import robort from "./man-320276.png";
// import robort from './4_Victory_01.png';
import DepartMentCard from "./components/DepartMentCard";
import Container from "./components/DepContainer";
import { Gallery } from "react-grid-gallery";
import MasonryImageList from "./components/gallery";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });
  console.log(screenSize);
  return (
    <div className="App">
      <Parallax pages={4} style={{ backgroundColor: "black" }}>
        <ParallaxLayer
          offset={0}
          speed={screenSize < 800 ? 2.5 : 1}
          factor={2.5}
          style={{
            backgroundImage: `url(${earth})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
          className="header"
        >
          <Header seclogo={seclogo} />
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={0} speed={screenSize < 800 ? 1.5 : 3}>
          <HeaderText />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={10}
          style={{
            // backgroundImage:`url(${robort})`,
            // backgroundSize:'contain',
            // backgroundPosition:'right',
            zIndex: "-3",
          }}
        >
          <h1 style={{ fontSize: "7rem" }}>Departments</h1>
          <p></p>
          <div className="departmemts">
            {/* <DepartMentCard/>
            <DepartMentCard/>
            <DepartMentCard/> */}
            <Container />
            <Container />
            <Container />
            <Container />
            <Container />
            <Container />
            <Container />
            <Container />
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1}
          speed={-10}
          factor={1}
          horizontal
          style={{
            backgroundImage: `url(${robort})`,
            backgroundPosition: "center",
          }}
        /> */}

        <ParallaxLayer offset={2} speed={2}>
          <h1 style={{ fontSize: "7rem" }}>Gallery</h1>
          <MasonryImageList />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-12}
          factor={3}
          horizontal
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        >
          <ParallaxLayer
            offset={2}
            speed={-4}
            factor={3}
            horizontal
            style={{
              zIndex: "100",
            }}
          >
            <h1 className="parallel_layer_gal">
              Win exciting prizes! 🎉 <br></br> For a total worth of 10 lakhs
              <br></br>Sample text Sample text Sample text Sample text Sample
              text.{" "}
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={0.5}>
          <h1 style={{ fontSize: "7rem", zIndex: "-1" }}>About</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
