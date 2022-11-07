import React from "react";
import "./footer.scss";
import styled from "styled-components";
import dresteinLogo from "../../assets/dresteinLogo.svg";
import Avatar from "@mui/joy/Avatar";
import { Link } from "react-router-dom";
import Chip from "@mui/joy/Chip";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const LogoHead = styled.div`
    display: flex;
    width: fit-content;
    gap: 0.5rem;
    align-items: center;
    @media screen and (max-width: 600px) {
      width: 80%;
      margin-left: 3rem;
      justify-content: flex-start;
    }
  `;

  const DLogo = styled.img`
    width: 20%;
    @media screen and (max-width: 600px) {
    }
  `;
  const EventLogo = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
    }
  `;
  const DresteinLetter = styled.p`
    font-size: 2.2vw;
    font-family: "Azonix", sans-serif;
    color: rgb(255, 255, 255);
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 7vw;
    }
  `;
  const Year = styled.p`
    font-size: 1vw;
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    color: rgb(255, 255, 255);
    text-align: center;
    height: auto;
    letter-spacing: 0.8em;
    @media screen and (max-width: 600px) {
      font-size: 3vw;
    }
  `;
  return (
    <div className="footer">
      <div className="flex container">
        <div className="block">
          <LogoHead>
            <DLogo src={dresteinLogo} alt="DresteinLogo" />
            <EventLogo>
              <DresteinLetter color="red">DRESTEIN</DresteinLetter>
              <Year>2 0 2 2</Year>
            </EventLogo>
          </LogoHead>
          <div className="desc">
            13<sup>th</sup> National level inter collegiate technical and
            management fest
          </div>
        </div>
        <div className="block">
          <h4 className="heading">CO-ORDINATORS</h4>

          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
          >
            Dr. K. Suresh Kumar
          </Chip>
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
          >
            Dr. N. Raja Rajeshwari
          </Chip>

          <h4
            className="heading"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            WEBSITE CO-ORDINATORS
          </h4>
          <Chip
            size="md"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
          >
            Shanu S
          </Chip>
          <Chip
            size="md"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
          >
            Bharath S
          </Chip>
          <Chip
            size="md"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
          >
            Gokul Nath
          </Chip>
          <Chip
            size="md"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
          >
            Sugan
          </Chip>
        </div>
        <div className="block">
          <h4 className="heading">USEFUL LINKS</h4>
          <a href="#" className="links">
            Home
          </a>
          <a href="#Departments" className="links">
            Departments
          </a>
          <Link to="/form" className="links">
            Register
          </Link>
          <Link to="/form" className="links">
            Events
          </Link>
          {/* <a href="#" className="links">
            Privacy Policy
          </a> */}
          <h4
            className="heading"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            SOCIALS
          </h4>
          <div class="social-links">
            <a
              target="_blank"
              href="https://www.facebook.com/pg/SaveethaEngineeringCollegeSEC/posts/?ref=page_internal"
            >
              <FaFacebook />
            </a>
            <a target="_blank" href="https://twitter.com/SaveethaSEC/">
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/saveethaengineeringcollege/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/saveetha-engineering-college/"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              href="https://in.pinterest.com/saveethaengineering/"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="block">
          <h4 className="heading">LOCATION</h4>
          <p className="address">
            Saveetha Nagar, Sriperumbadur Taluk, Kanchipuram - Chennai Rd,
            Chennai, Tamil Nadu 602105
          </p>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=Saveetha engineering college&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © Saveetha Engineering College, Powered by Drestein.
      </div>
    </div>
  );
};

export default Footer;
