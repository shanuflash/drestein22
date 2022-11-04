import React from "react";
import "./footer.scss";
import styled from "styled-components";
import dresteinLogo from "../../assets/dresteinLogo.svg";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            accusantium earum qui deleniti consectetur ipsa quia quam laborum
            sed, magni repellat, eligendi maxime nemo, aut eum officiis voluptas
            esse dolore?
          </div>
        </div>
        <div className="block">
          <h4 className="heading">SOCIALS</h4>
        </div>
        <div className="block">
          <h4 className="heading">USEFUL LINKS</h4>
          <div className="links">Home</div>
          <div className="links">About us</div>
          <div className="links">Services</div>
          <div className="links">Terms and service</div>
          <div className="links">Privacy Policy</div>
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
