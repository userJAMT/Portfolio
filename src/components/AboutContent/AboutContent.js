import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>¿Quién soy?</h1>
        <p>
          Soy un Programador Web Full Stack graduado de SoyHenry, apasionado por
          la ciencia y la tecnología desde pequeño he estado aprendiendo durante
          muchos años, ganando muy buenas cualidades para resolver problemas de
          forma óptima y eficaz. Ahora adentrandome en el mundo de la
          programación como Full Stack estoy listo para afrontar los nuevos
          retos con ganas de aprender y darlo todo.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <h2>Las tecnologías que manejo:</h2>
        <div className="img-container">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="tech"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
