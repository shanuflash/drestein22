import "./styles/HambBurger.css";

const Mobilenav = ({ openMenu }) => {

  return (
   
          <div className = {`onlyshow ${openMenu ? "slide" : ""}`} >
              <ul className="nav-list">
                <li>HOME</li>
                <li>EVENTS</li>
                <li>DEPARTMENTS</li>
                <li>ABOUT</li>
              </ul>
          </div >
    
  );
};
export default Mobilenav;
