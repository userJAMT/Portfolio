import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [hamb, setHamb] = useState(false);
  const handleHamb = () => setHamb(!hamb);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 100 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portafolio</h1>
      </Link>
      <ul className={hamb ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/project">Proyectos</Link>
        </li>
        <li>
          <Link to="/about">Sobre mí</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
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
