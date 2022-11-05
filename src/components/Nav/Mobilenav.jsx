import "./styles/HambBurger.css";
import { HashLink as Link } from "react-router-hash-link";

const Mobilenav = ({ openMenu }) => {
  return (
    <div className={`onlyshow ${openMenu ? "slide" : ""}`}>
      <ul className="nav-list">
        <Link style={{ textDecoration: "inherit" }} to="/#">
          <li>HOME</li>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/#Departments">
          <li>DEPARTMENTS</li>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/#SpecialEvents">
          <li>SPECIAL EVENTS</li>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/#Gallery">
          <li>GALLERY</li>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/#SECLife">
          <li>SEC LIFE</li>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/#Guest">
          <li>CHIEF GUEST</li>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/#About">
          <li>ABOUT</li>
        </Link>
      </ul>
    </div>
  );
};
export default Mobilenav;
