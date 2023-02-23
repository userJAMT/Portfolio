import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hola, mi nombre es Jose</p>
        <h1>Soy un Programador Web Full Stack</h1>
        <div>
          <Link to="/project" className="btn">
            Proyectos
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
