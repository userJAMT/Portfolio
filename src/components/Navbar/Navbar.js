import "./NavbarStyles.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import es from "../../assets/es.png";
import us from "../../assets/us.png";
import { ThemeContext } from "../../context";

function Navbar() {
  const [hamb, setHamb] = useState(false);
  const handleHamb = () => setHamb(!hamb);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 100 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  const theme = useContext(ThemeContext);
  const { language } = theme.state;

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>{language === "EN" ? "Portfolio" : "Portafolio"}</h1>
      </Link>
      <div className="flags">
        <div className="flags-items">
          <img
            src={es}
            alt="es"
            onClick={() => theme.dispatch({ type: "ES" })}
          />
          <img
            src={us}
            alt="us"
            onClick={() => theme.dispatch({ type: "EN" })}
          />
        </div>
      </div>
      
        <ul className={hamb ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">{language === "EN" ? "Home" : "Inicio"}</Link>
          </li>
          <li>
            <Link to="/project">
              {language === "EN" ? "Projects" : "Proyectos"}
            </Link>
          </li>
          <li>
            <Link to="/about">{language === "EN" ? "About" : "Sobre mí"}</Link>
          </li>
          <li>
            <Link to="/contact">
              {language === "EN" ? "Contact" : "Contacto"}
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleHamb}>
          {hamb ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      
    </div>
  );
}

export default Navbar;
