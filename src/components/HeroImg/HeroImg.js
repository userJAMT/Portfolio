import "./HeroImgStyles.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";

function HeroImg() {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;

  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt="IntroImg"
        />
      </div>
      <div className="content">
        <p>
          {language === "EN"
            ? "HI, MI NAME IS JOSE"
            : "HOLA, MI NOMBRE ES JOSE"}
        </p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            {language === "EN" ? "Projects" : "Proyectos"}
          </Link>
          <Link to="/contact" className="btn btn-light">
            {language === "EN" ? "Contact" : "Contacto"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
